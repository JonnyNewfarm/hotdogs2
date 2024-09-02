"use client";

import { count } from "console";
import { useRouter, useSearchParams } from "next/navigation";

interface PaginationControlsProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  count: number;
}

const PaginationControls = ({
  hasNextPage,
  hasPrevPage,
  count,
}: PaginationControlsProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "6";

  return (
    <div className="flex gap-2">
      <button
        className="bg-blue-500 text-white p-1"
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(
            `/products/?page=${Number(page) - 1}&per_page=${per_page}`
          );
        }}
      >
        prev page
      </button>

      <div>
        {page} / {Math.ceil(count / Number(per_page))}
      </div>

      <button
        className="bg-blue-500 text-white p-1"
        disabled={!hasNextPage}
        onClick={() => {
          router.push(
            `/products/?page=${Number(page) + 1}&per_page=${per_page}`
          );
        }}
      >
        next page
      </button>
    </div>
  );
};

export default PaginationControls;
