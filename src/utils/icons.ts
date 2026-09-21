export type SpecIconName =
  | 'year'
  | 'engine'
  | 'mileage'
  | 'transmission'
  | 'drive'
  | 'fuel'
  | 'body'
  | 'door'
  | 'cylinder'
  | 'condition'
  | 'color'
  | 'vin';

export type FeatureIconName =
  | 'engine'
  | 'shifter'
  | 'seat'
  | 'steering'
  | 'brake'
  | 'top'
  | 'wheel'
  | 'gauge'
  | 'trim';

/**
 * Picks an icon for a line of equipment by looking for the first keyword group
 * that matches. Order matters — "power steering" must win over "wheel".
 */
const FEATURE_RULES: Array<[RegExp, FeatureIconName]> = [
  [/v-?8|engine|manifold|carburett?or|valve cover|air cleaner|exhaust|header|cu in|cubic|cylinder/i, 'engine'],
  [/transmission|speed manual|automatic|shifter|gearbox|clutch|console/i, 'shifter'],
  [/seat|upholster|interior|hide|door card|headliner/i, 'seat'],
  [/steering/i, 'steering'],
  [/brake|disc|drum/i, 'brake'],
  [/convertible top|soft top|hardt?op|vinyl roof|roof|sunroof/i, 'top'],
  [/wheels?|tyres?|tires?|rims?|hubcap|beauty ring/i, 'wheel'],
  [/\ba\/c\b|air conditioning|gauge|instrument|radio|clock|tachometer/i, 'gauge'],
  [/chrome|stainless|trim|bumper|grille|paint|bodywork|brightwork/i, 'trim'],
];

export function featureIcon(feature: string): FeatureIconName {
  for (const [pattern, icon] of FEATURE_RULES) {
    if (pattern.test(feature)) return icon;
  }
  return 'trim';
}
