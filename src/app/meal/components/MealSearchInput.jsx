"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function MealSearchInput() {
    const [search, setSearch] = useState('');
    const router = useRouter();
    const pathName = usePathname();

    useEffect(() => {
        const searchQuery = { search };
        const urlQueryParam = new URLSearchParams(searchQuery);
        const url = `${pathName}?${urlQueryParam}`
        router.push(url);
    }, [search]);

  return (
      <div>
          <div>
              <input className="border-2 border-black" placeholder="search" type="text" value={search} onChange={e => setSearch(e.target.value)} />
          </div>
    </div>
  );
}