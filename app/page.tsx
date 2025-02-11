import { getHotels } from "@/actions/getHotels";
import HotelList from "@/components/hotel/HotelList";

interface HomeProps {
  searchParams: {
    title?: string;
    country?: string;
    state?: string;
    city?: string;
  };
}

export default async function Home({ searchParams }: HomeProps) {
  // Ensure all properties have a default value
  const sanitizedParams = {
    title: searchParams.title ?? "",
    country: searchParams.country ?? "",
    state: searchParams.state ?? "",
    city: searchParams.city ?? "",
  };

  const hotels = await getHotels(sanitizedParams);

  if (!hotels || hotels.length === 0) return <div>No hotels found...</div>;

  return (
    <div>
      <HotelList hotels={hotels} />
    </div>
  );
}
