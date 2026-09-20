# av03 — Где что менять

Единая точка правды по всем изменяемым значениям сайта. Бренд, контакты и домен
централизованы — в коде нет захардкоженных «GOLDEN ERA MOTORS», телефонов или адресов.

Тема сайта: **американская классика / винтаж**. Фон — бумага, акцент — бордо,
типографика — узкий плакатный Bebas Neue + засечный Bitter.

---

## 1. Бренд, телефон, email, адрес → `src/data/site.ts`

**Главный файл.** Меняешь здесь — обновляется весь сайт (шапка, футер, контакты,
мета-описания, юридические страницы, CTA).

| Поле | Что меняет | Текущее значение |
|---|---|---|
| `name` | Полное имя бренда (заголовки, мета, юр. страницы) | `'GOLDEN ERA MOTORS'` |
| `brandShort` | Первая часть wordmark в шапке/футере | `'GOLDEN ERA'` |
| `brandTail` | Вторая часть wordmark | `'MOTORS'` |
| `monogram` | Буква в лого | `'G'` |
| `tagline` | Слоган | `'American classics · Sales & restoration'` |
| `description` | Дефолтное meta description | `'Classic American car sales, restoration and service…'` |
| `phone` | Отображаемый номер | `'+1 (313) 555-0197'` |
| `phoneHref` | Ссылка `tel:` (только цифры) | `'tel:+13135550197'` |
| `email` | Email | `'hello@goldeneramotors.com'` |
| `address` | Адрес | `'3400 Michigan Avenue, Detroit, MI'` |
| `hours` | Часы работы | `'Mon–Sat · 9:00–18:00'` |
| `url` | Домен (должен совпадать с `astro.config.mjs`) | `'https://av03.pages.dev'` |
| `established` | Год основания (в hero, CTA, About, OG) | `'1978'` |

Ниже в этом же файле: `nav`, `services` (6 позиций с ценами), `testimonials`, `stats`.

---

## 2. Каталог авто → `src/data/cars.ts`

Каждая машина — объект в массиве `cars` (сейчас **пусто** — наполняем по мере поступления
фото от владельца).

| Поле | Описание |
|---|---|
| `slug` | уникальный id, совпадает с именем фото (напр. `'mustang-1965-fastback'`) |
| `brand` / `model` | марка / модель |
| `year` / `price` | год / цена в USD |
| `body` | `'Coupe' \| 'Sedan' \| 'Convertible' \| 'Hardtop' \| 'Wagon' \| 'Pickup' \| 'Muscle Car'` |
| `engine` / `mileage` | двигатель / пробег (мили) |
| `transmission` / `drive` / `fuel` / `color` | КПП / привод / топливо / цвет |
| `silhouette` | `'classic' \| 'coupe' \| 'sedan' \| 'suv'` — SVG-заглушка, если нет фото |
| `images` | массив, напр. `['/cars/mustang-1965-fastback.webp']` (первое фото — главное) |
| `vin` / `doors` / `cylinders` / `condition` | опционально; `condition` показывается в спеках |
| `features` | список опций (секция «Equipment» на странице авто) |
| `featured` | `true` — показывать на главной + делать героем |
| `description` | текст на странице авто |

Фильтр в каталоге строится автоматически из списка `body` — если добавишь новый тип,
допиши его в массив `bodies` в начале `src/pages/catalog.astro`.

### Как добавить машину
1. Кинь фото в папку `img/` (гитигнорится).
2. `pnpm photos` (= `node scripts/to-webp.mjs img`) → сгенерит `.webp` + `.avif` (полный + `-card`).
3. Добавь объект в `cars.ts`: `slug` = имя фото, `images: ['/cars/<slug>.webp']`.
4. `pnpm build` → пуш в GitHub → Cloudflare передеплоит.

---

## 3. Дизайн (цвета, шрифты) → `src/styles/global.css`

Блок `@theme` в самом верху. Поменял токен — перекрасился весь сайт.

| Токен | Что это | Текущее |
|---|---|---|
| `--font-display` | шрифт заголовков | `"Bebas Neue"` |
| `--font-sans` | основной шрифт | `"Bitter Variable"` |
| `--color-paper` | фон страницы | `#f3ebdd` |
| `--color-cream` | светлые панели/карточки | `#faf5ec` |
| `--color-ink` | основной текст | `#231a14` |
| `--color-muted` | приглушённый текст | `#6b5b4b` |
| `--color-burgundy` | акцент (кнопки, ссылки) | `#7a2b2b` |
| `--color-burgundy-deep` | акцент при hover / рамки CTA | `#5e1f1f` |
| `--color-chrome` | разделители, «хром» | `#c8b9a0` |

Классы-примитивы темы: `.display` (плакатный заголовок), `.label` (капс-микротекст),
`.eyebrow`, `.frame` (фотография в рамке), `.tag` (карточка), `.grain` (зерно бумаги),
`.container-x` (контейнер). Шрифты подключаются в `src/layouts/BaseLayout.astro`.

---

## 4. Домен → `astro.config.mjs`

```js
site: 'https://av03.pages.dev',
```
Должно совпадать с `site.url` в `site.ts` и с `Sitemap:` в `public/robots.txt`.

---

## 5. Бренд в ассетах (вручную, вне site.ts)

| Файл | Что менять |
|---|---|
| `public/favicon.svg` | рамка + монограмма «G» |
| `scripts/make-og.mjs` | текст «GOLDEN ERA MOTORS», «EST. 1978 · DETROIT, MICHIGAN», `av03.pages.dev` |
| `scripts/make-hero.mjs` | фон-заглушка героя: «1978», город, слоган |
| `public/hero.jpg` | заглушка героя и фон галереи |
| `public/og.jpg` | превью для соцсетей |

Перегенерация:
```bash
pnpm hero                            # public/hero.jpg
pnpm og                              # public/og.jpg — плакат без фото
node scripts/make-og.mjs img/shop.jpg   # public/og.jpg — с фото справа
```

---

## 6. Чек-лист при смене бренда/контактов

1. `src/data/site.ts` — name, brandShort, brandTail, monogram, phone, phoneHref, email, address, hours, url, established
2. `astro.config.mjs` — site (если меняется домен) + `public/robots.txt`
3. `public/favicon.svg` — монограмма
4. `scripts/make-hero.mjs`, `scripts/make-og.mjs` — текст → `pnpm hero && pnpm og`
5. `src/pages/terms.astro` — штат/округ в разделе «Governing Law and Venue» (сейчас Michigan / Wayne County)
6. `src/data/cars.ts` — если меняется инвентарь
7. `pnpm build` → `git push` (Cloudflare деплоит сам)

---

## Быстрые команды

```bash
pnpm dev        # локальный dev-сервер (http://localhost:4321)
pnpm build      # сборка в ./dist
pnpm photos     # img/ → public/cars/*.webp + *.avif (полный + -card)
pnpm hero       # перегенерация public/hero.jpg
pnpm og         # перегенерация public/og.jpg
```
