"use client";

import { useMemo, useState } from "react";
import type { InfoCategory, InfoItem } from "@/data/informasi";
import { AltekIcon } from "@/components/altek/AltekIcon";
import { InfoCard } from "@/components/altek/InfoCard";
import { InfoDetailModal } from "@/components/altek/InfoDetailModal";

interface InformasiBrowserProps {
  items: InfoItem[];
}

type CategoryFilter = "Semua" | InfoCategory;

const CATEGORY_ORDER: readonly InfoCategory[] = [
  "Praktikum",
  "Rekrutmen",
  "Evaluasi & Layanan",
];

const INITIAL_VISIBLE_COUNT = 9;

export function InformasiBrowser({ items }: InformasiBrowserProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("Semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [selectedItem, setSelectedItem] = useState<InfoItem | null>(null);
  const [triggerEl, setTriggerEl] = useState<HTMLElement | null>(null);

  const categoryCounts = useMemo(() => {
    const counts = new Map<InfoCategory, number>();
    for (const item of items) {
      counts.set(item.category, (counts.get(item.category) ?? 0) + 1);
    }

    const orderedCategories: InfoCategory[] = [
      ...CATEGORY_ORDER.filter((cat) => counts.has(cat)),
      ...Array.from(counts.keys()).filter(
        (cat) => !CATEGORY_ORDER.includes(cat),
      ),
    ];

    return [
      { key: "Semua" as CategoryFilter, count: items.length },
      ...orderedCategories.map((cat) => ({
        key: cat as CategoryFilter,
        count: counts.get(cat) ?? 0,
      })),
    ];
  }, [items]);

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchCat =
        activeCategory === "Semua" || item.category === activeCategory;
      if (!matchCat) return false;
      if (!normalizedQuery) return true;

      const haystack = `${item.title} ${item.excerpt} ${item.date} ${item.category}`.toLowerCase();
      return haystack.includes(normalizedQuery);
    });
  }, [items, activeCategory, normalizedQuery]);

  const isCompactMode =
    activeCategory === "Semua" &&
    !normalizedQuery &&
    !showAll &&
    filteredItems.length > INITIAL_VISIBLE_COUNT;

  const visibleItems = isCompactMode
    ? filteredItems.slice(0, INITIAL_VISIBLE_COUNT)
    : filteredItems;

  const remainingCount = filteredItems.length - visibleItems.length;

  const handleSelectItem = (item: InfoItem, trigger: HTMLElement | null) => {
    setTriggerEl(trigger);
    setSelectedItem(item);
  };

  const handleResetFilters = () => {
    setActiveCategory("Semua");
    setSearchQuery("");
  };

  return (
    <>
      <div className="altek-info-filter-row">
        <div
          className="altek-info-filter-group"
          role="group"
          aria-label="Filter kategori informasi"
        >
          {categoryCounts.map(({ key, count }) => {
            const isActive = activeCategory === key;
            return (
              <button
                key={key}
                type="button"
                className={`altek-info-filter-btn${isActive ? " active" : ""}`}
                aria-pressed={isActive}
                onClick={() => setActiveCategory(key)}
              >
                {key} <span>{count}</span>
              </button>
            );
          })}
        </div>

        <div className="altek-info-search-wrap">
          <input
            type="search"
            id="altekInfoSearch"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Cari praktikum, oprec, post-test..."
            aria-label="Cari informasi ALTEK"
          />
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        Menampilkan {visibleItems.length} dari {filteredItems.length} informasi
      </p>

      <div className="altek-info-grid" id="infoCards">
        {visibleItems.length > 0 ? (
          visibleItems.map((item) => (
            <InfoCard key={item.id} item={item} onSelect={handleSelectItem} />
          ))
        ) : (
          <article className="altek-rich-empty altek-rich-empty--information">
            <div className="altek-empty-art" aria-hidden="true">
              <div className="altek-empty-core">
                <AltekIcon name="search" variant="icon" />
              </div>
            </div>
            <div className="altek-empty-copy">
              <strong>
                {normalizedQuery
                  ? `Tidak ada informasi yang cocok dengan kata kunci "${searchQuery.trim()}"`
                  : "Belum ada informasi pada kategori ini"}
              </strong>
              <p>
                Coba gunakan kata kunci lain atau tampilkan kembali seluruh
                kategori informasi ALTEK.
              </p>
              <button
                type="button"
                className="altek-empty-reset-btn"
                onClick={handleResetFilters}
              >
                Tampilkan semua informasi
              </button>
            </div>
          </article>
        )}
      </div>

      {isCompactMode && remainingCount > 0 && (
        <div className="altek-info-more-wrap" id="altekInfoMoreWrap">
          <button
            type="button"
            className="altek-info-more-btn"
            id="altekInfoShowAllBtn"
            onClick={() => setShowAll(true)}
          >
            Tampilkan {remainingCount} informasi lainnya
          </button>
        </div>
      )}

      <InfoDetailModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        triggerElement={triggerEl}
      />
    </>
  );
}
