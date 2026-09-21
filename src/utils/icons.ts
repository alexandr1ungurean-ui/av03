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
  | 'drive'
  | 'wheel'
  | 'gauge'
  | 'condition'
  | 'trim';

/**
 * Picks an icon for a line of equipment by looking for the first keyword group
 * that matches. Order matters — "power steering" must win over "wheel",
 * "twin-stick 4x4 shifter" must stay a shifter.
 */
const FEATURE_RULES: Array<[RegExp, FeatureIconName]> = [
  [
    /v-?8|engine|manifold|intake|carburett?or|valve cover|air cleaner|exhaust|header|muffler|flowmaster|cu in|cubic|cylinder|efi|horsepower|procharg|supercharg|turbo|blower|intercooler|inject|dyno|whp|torque|piston/i,
    'engine',
  ],
  [/transmission|speed manual|automatic|shifter|gearbox|clutch|console/i, 'shifter'],
  [/seat|upholster|interior|hide|door card|headliner/i, 'seat'],
  [/steering/i, 'steering'],
  [/brake|disc|drum/i, 'brake'],
  [/convertible top|soft top|hardt?op|vinyl roof|roof|sunroof/i, 'top'],
  [/4x4|4wd|awd|four-wheel drive|all-wheel|transfer case|drivetrain|shock|suspension|spring|axle/i, 'drive'],
  [/wheels?|tyres?|tires?|rims?|hubcap|beauty ring/i, 'wheel'],
  [/\ba\/c\b|air conditioning|heat|gauge|instrument|radio|stereo|audio|speaker|clock|tachometer/i, 'gauge'],
  [/restor|frame-off|refinish|rebuild|survivor|documented|like-new/i, 'condition'],
  [/chrome|stainless|trim|bumper|grille|paint|bodywork|brightwork|carbon/i, 'trim'],
];

export function featureIcon(feature: string): FeatureIconName {
  for (const [pattern, icon] of FEATURE_RULES) {
    if (pattern.test(feature)) return icon;
  }
  return 'trim';
}
