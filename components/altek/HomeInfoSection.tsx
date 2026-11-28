"use client";

import { useState } from "react";
import type { InfoItem } from "@/data/informasi";
import { InfoCard } from "@/components/altek/InfoCard";
import { InfoDetailModal } from "@/components/altek/InfoDetailModal";

interface HomeInfoSectionProps {
  items: InfoItem[];
}

export function HomeInfoSection({ items }: HomeInfoSectionProps) {
  const [selectedItem, setSelectedItem] = useState<InfoItem | null>(null);
  const [triggerEl, setTriggerEl] = useState<HTMLElement | null>(null);

  const handleSelect = (item: InfoItem, trigger: HTMLElement | null) => {
    setTriggerEl(trigger);
    setSelectedItem(item);
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <div className="altek-info-grid">
        {items.map((item) => (
          <InfoCard key={item.id} item={item} onSelect={handleSelect} />
        ))}
      </div>

      <InfoDetailModal
        item={selectedItem}
        onClose={handleClose}
        triggerElement={triggerEl}
      />
    </>
  );
}
