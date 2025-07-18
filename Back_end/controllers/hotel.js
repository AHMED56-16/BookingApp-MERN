import Hotel from '../models/Hotel.js';
import Room from '../models/Room.js'
export const createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body)
    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    } catch (err) {
        next(err)
    }
}

export const updateHotel = async (req, res, next) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedHotel)
    } catch (err) {
        next(err)
    }
}

export const deleteHotel = async (req, res, next) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel has been deleted!")
    } catch (err) {
        next(err)
    }
}

export const getHotel = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
    } catch (err) {
        next(err)
    }
}

export const getHotels = async (req, res, next) => {
    const { min, max, limit, ...others } = req.query;

    const minPrice = parseInt(min) || 1;
    const maxPrice = parseInt(max) || 5656565656;
    const limitNum = parseInt(limit);

    const obj = { ...others };
    const cheapestPrice = { $gt: minPrice, $lt: maxPrice };
    if (min || max) obj.cheapestPrice = cheapestPrice;

    try {
        const hotels = await Hotel.find(obj).limit(limitNum);
        res.status(200).json(hotels);
    } catch (err) {
        next(err);
    }
}

export const countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(",")
    try {
        const list = await Promise.all(cities.map(city => {
            return Hotel.countDocuments({ city: city })
        }))
        res.status(200).json(list)
    } catch (err) {
        next(err)
    }
}

export const countByType = async (req, res, next) => {
    try {
        const hotelCount = await Hotel.countDocuments({ type: "Hotel" });
        const apartmentCount = await Hotel.countDocuments({ type: "Apartments" });
        const resortCount = await Hotel.countDocuments({ type: "Resorts" });
        const villaCount = await Hotel.countDocuments({ type: "Villas" });
        const cabinCount = await Hotel.countDocuments({ type: "Cabins" });

        res.status(200).json([
            { type: "Hotel", count: hotelCount },
            { type: "Apartments", count: apartmentCount },
            { type: "Resorts", count: resortCount },
            { type: "Villas", count: villaCount },
            { type: "Cabins", count: cabinCount },
        ]);
    } catch (err) {
        next(err)
    }
}

export const getHotelRooms = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    const list = await Promise.all(
      hotel.rooms.map((room) => {
        return Room.findById(room);
      })
    );
    res.status(200).json(list)
  } catch (err) {
    next(err);
  }
};