/**
 * Slim category list for the Header Products dropdown only.
 * No dependency on productCatalog or scrapedProducts — keeps the layout JS bundle smaller.
 *
 * When adding a new category in productCatalog.ts (baseProductCategories),
 * add a matching { id, name } here so it appears in the header nav.
 * Keep the order consistent with baseProductCategories.
 */
export type CategoryNavItem = { id: string; name: string };

export function getCategoryNav(): CategoryNavItem[] {
  return [
    { id: "bulk-materials", name: "Bulk Materials" },
    { id: "tmt-bars", name: "TMT Bars" },
    { id: "structural-steel", name: "Structural Steel" },
    { id: "aac-blocks", name: "AAC Blocks" },
    { id: "solid-blocks", name: "Solid Blocks" },
    { id: "paver-blocks", name: "Paver Blocks" },
    { id: "construction-cement", name: "Construction Cement" },
    { id: "shuttering-plywood", name: "Shuttering Plywood" },
    { id: "construction-sand", name: "Construction Sand" },
    { id: "ready-mix-concrete", name: "Ready Mix Concrete" },
    { id: "construction-aggregates", name: "Construction Aggregates" },
    { id: "bricks", name: "Bricks" },
    { id: "hume-pipes", name: "Hume Pipes" },
    { id: "ready-mix-plaster", name: "Ready Mix Plaster" },
    { id: "m-sand", name: "M Sand" },
  ];
}
