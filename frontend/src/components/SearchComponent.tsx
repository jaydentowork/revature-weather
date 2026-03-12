import { useState } from "react";

interface SearchProps {
  onSearch: (query: string, searchType: "city" | "region") => void;
}
export default function SearchComponent({ onSearch }: SearchProps) {
  const [query, setQuery] = useState("");
  const [searchType, setSearchType] = useState<"city" | "region">("city");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim(), searchType);
      setQuery("");
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex justify-content-center gap-2 mb-4"
    >
      <select
        className="form-selct w-auto"
        value={searchType}
        onChange={(e) => setSearchType(e.target.value as "city" | "region")}
      >
        <option value="city">City</option>
        <option value="region">Region</option>
      </select>
      <input
        type="text"
        className="form-control w-50"
        placeholder={`Search by ${searchType}`}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );
}
