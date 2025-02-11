import { getHotelsByUserId } from "@/actions/getHotelsByUserId";
import HotelList from "@/components/hotel/HotelList";

const MyHotels = async () => {
    try {
        const hotels = await getHotelsByUserId();

        if (!hotels || hotels.length === 0) {
            return <div>No hotels found!</div>;
        }

        return (
            <div>
                <h2 className="text-2xl font-semibold">Here are your properties</h2>
                <HotelList hotels={hotels} />
            </div>
        );
    } catch (error) {
        console.error("Error fetching hotels:", error);
        return <div>Failed to load hotels. Please try again later.</div>;
    }
};

export default MyHotels;
