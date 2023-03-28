import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Wilayah from 'App/Models/Wilayah'

export default class extends BaseSeeder {
  public async run() {
    console.log('----- Seeding Wilayah : Started')
    await Wilayah.createMany([
      {
        id: "11",
        nama: "ACEH",
        tingkat: "provinsi"
      },
      {
        id: "11.01",
        nama: "KAB. ACEH SELATAN",
        tingkat: "kota"
      },
      {
        id: "11.01.01",
        nama: "Bakongan",
        tingkat: "kecamatan"
      },
      {
        id: "11.01.01.2001",
        nama: "Keude Bakongan",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.01.2002",
        nama: "Ujong Mangki",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.01.2003",
        nama: "Ujong Padang",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.01.2004",
        nama: "Gampong Drien",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.01.2015",
        nama: "Darul Ikhsan",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.01.2016",
        nama: "Padang Beurahan",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.01.2017",
        nama: "Gampong Baro",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.02",
        nama: "Kluet Utara",
        tingkat: "kecamatan"
      },
      {
        id: "11.01.02.2001",
        nama: "Fajar Harapan",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.02.2002",
        nama: "Krueng Batee",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.02.2003",
        nama: "Pasi Kuala Asahan",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.02.2004",
        nama: "Gunung Pulo",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.02.2005",
        nama: "Pulo Ie I",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.02.2006",
        nama: "Jambo Manyang",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.02.2007",
        nama: "Simpang Empat",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.02.2008",
        nama: "Limau Purut",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.02.2009",
        nama: "Pulo Kambing",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.02.2010",
        nama: "Kampung Paya",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.02.2011",
        nama: "Krueng Batu",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.02.2012",
        nama: "Krueng Kluet",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.02.2013",
        nama: "Alur Mas",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.02.2014",
        nama: "Kampung Tinggi",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.02.2015",
        nama: "Ruak",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.02.2016",
        nama: "Simpang Lhee",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.02.2017",
        nama: "Suaq Geuringgeng",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.02.2018",
        nama: "Pasi Kuala Ba'u",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.02.2019",
        nama: "Kedai Padang",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.02.2020",
        nama: "Kotafajar",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.02.2021",
        nama: "Gunung Pudung",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.03",
        nama: "Kluet Selatan",
        tingkat: "kecamatan"
      },
      {
        id: "11.01.03.2001",
        nama: "Suaq Bakung",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.03.2002",
        nama: "Rantau Binuang",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.03.2003",
        nama: "Barat Daya",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.03.2004",
        nama: "Sialang",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.03.2005",
        nama: "Kapeh",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.03.2006",
        nama: "Pulo Ie",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.03.2007",
        nama: "Kedai Runding",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.03.2008",
        nama: "Kedai Kandang",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.03.2009",
        nama: "Gampong Luar",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.03.2010",
        nama: "Ujung",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.03.2011",
        nama: "Jua",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.03.2012",
        nama: "Pasi Meurapat",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.03.2013",
        nama: "Ujung Pasir",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.03.2014",
        nama: "Geulumbuk",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.03.2015",
        nama: "Pasie Lembang",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.03.2016",
        nama: "Ujung Padang",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.03.2017",
        nama: "Indra Damai",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.04",
        nama: "Labuhan Haji",
        tingkat: "kecamatan"
      },
      {
        id: "11.01.04.2001",
        nama: "Bakau Hulu",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.04.2002",
        nama: "Padang Bakau",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.04.2003",
        nama: "Manggis Harapan",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.04.2004",
        nama: "Pasar Lama",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.04.2005",
        nama: "Apha",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.04.2006",
        nama: "Ujung Batu",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.04.2007",
        nama: "Pawoh",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.04.2008",
        nama: "Dalam",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.04.2009",
        nama: "Kota Palak",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.04.2010",
        nama: "Cacang",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.04.2011",
        nama: "Tengah Pisang",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.04.2012",
        nama: "Pisang",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.04.2013",
        nama: "Hulu Pisang",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.04.2014",
        nama: "Tengah Baru",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.04.2015",
        nama: "Lembah Baru",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.04.2016",
        nama: "Padang Baru",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.05",
        nama: "Meukek",
        tingkat: "kecamatan"
      },
      {
        id: "11.01.05.2001",
        nama: "Kuta Buloh II",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.05.2002",
        nama: "Kuta Buloh I",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.05.2003",
        nama: "Ie Dingen",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.05.2004",
        nama: "Drien Jalo",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.05.2005",
        nama: "Jambo Papeun",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.05.2006",
        nama: "Buket Meuh",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.05.2007",
        nama: "Blang Kuala",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.05.2008",
        nama: "Rot Teungoh",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.05.2009",
        nama: "Alue Baro",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.05.2010",
        nama: "Ladang Tuha",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.05.2011",
        nama: "Lhok Mamplam",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.05.2012",
        nama: "Arun Tunggai",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.05.2013",
        nama: "Blang Teungoh",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.05.2014",
        nama: "Blang Bladeh",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.05.2015",
        nama: "Ie Buboh",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.05.2016",
        nama: "Keude Meukek",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.05.2017",
        nama: "Kuta Baro",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.05.2018",
        nama: "Tanjung Harapan",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.05.2019",
        nama: "Labuhan Tarok",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.05.2020",
        nama: "Lhok Aman",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.05.2021",
        nama: "Alue Meutuah",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.05.2022",
        nama: "Ladang Baro",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.05.2023",
        nama: "Labuhan Tarok II",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.06",
        nama: "Samadua",
        tingkat: "kecamatan"
      },
      {
        id: "11.01.06.2001",
        nama: "Dalam",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.06.2002",
        nama: "Subarang",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.06.2003",
        nama: "Kuta Baru",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.06.2004",
        nama: "Gunung Ketek",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.06.2005",
        nama: "Ladang Panton Luas",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.06.2006",
        nama: "Madat",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.06.2007",
        nama: "Alur Seumerah",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.06.2008",
        nama: "Tengah",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.06.2009",
        nama: "Gunung Cut",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.06.2010",
        nama: "Alur Pinang",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.06.2011",
        nama: "Kuta Blang",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.06.2012",
        nama: "Batee Tunggai",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.06.2013",
        nama: "Ujung Tanah",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.06.2014",
        nama: "Ujung Kampung",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.06.2015",
        nama: "Jilatang",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.06.2016",
        nama: "Luar",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.06.2017",
        nama: "Lubuk Layu",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.06.2018",
        nama: "Suaq Hulu",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.06.2019",
        nama: "Tampang",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.06.2020",
        nama: "Payonan Gadang",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.06.2021",
        nama: "Gadang",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.06.2022",
        nama: "Baru",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.06.2023",
        nama: "Ladang Kasik Putih",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.06.2024",
        nama: "Air Sialang Hilir.",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.06.2025",
        nama: "Air Sialang Hulu",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.06.2026",
        nama: "Air Sialang Tengah",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.06.2027",
        nama: "Balai",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.06.2028",
        nama: "Arafah",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.07",
        nama: "Sawang",
        tingkat: "kecamatan"
      },
      {
        id: "11.01.07.2001",
        nama: "Sikulat",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.07.2002",
        nama: "Sawang I",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.07.2003",
        nama: "Meuligo",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.07.2004",
        nama: "Lhok Pawoh",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.07.2005",
        nama: "Sawang II",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.07.2006",
        nama: "Ujung Karang",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.07.2007",
        nama: "Trieng Meuduro Baroh",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.07.2008",
        nama: "Trieng Meuduro Tunong",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.07.2009",
        nama: "Panton Luas",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.07.2010",
        nama: "Simpang Tiga",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.07.2011",
        nama: "Kuta Baro",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.07.2012",
        nama: "Blang Geulinggang",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.07.2013",
        nama: "Mutiara",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.07.2014",
        nama: "Ujung Padang",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.07.2015",
        nama: "Sawang Ba'u",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.08",
        nama: "Tapaktuan",
        tingkat: "kecamatan"
      },
      {
        id: "11.01.08.2001",
        nama: "Lhok Keutapang",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.08.2002",
        nama: "Hilir",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.08.2003",
        nama: "Padang",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.08.2004",
        nama: "Hulu",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.08.2005",
        nama: "Jambo Apha",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.08.2006",
        nama: "Tepi Air",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.08.2007",
        nama: "Pasar",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.08.2008",
        nama: "Lhok Bengkuang",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.08.2009",
        nama: "Panton Luas",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.08.2010",
        nama: "Gunung Kerambil",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.08.2011",
        nama: "Air Berudang",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.08.2012",
        nama: "Batu Itam",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.08.2013",
        nama: "Panjupian",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.08.2014",
        nama: "Lhok Rukam",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.08.2015",
        nama: "Air Pinang",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.08.2016",
        nama: "Lhok Bengkuang Timur",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.09",
        nama: "Trumon",
        tingkat: "kecamatan"
      },
      {
        id: "11.01.09.2001",
        nama: "Keude Trumon",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.09.2002",
        nama: "Ujong Tanoh",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.09.2003",
        nama: "Sigleng",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.09.2004",
        nama: "Ie Meudama",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.09.2005",
        nama: "Tuepin Tinggi",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.09.2006",
        nama: "Kuta Baro",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.09.2007",
        nama: "Panton Bilie",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.09.2012",
        nama: "Kuta Padang",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.09.2013",
        nama: "Raket",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.09.2014",
        nama: "Gampong Teungoh",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.09.2015",
        nama: "Seuneubok Jaya",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.09.2016",
        nama: "Padang Harapan",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.10",
        nama: "Pasi Raja",
        tingkat: "kecamatan"
      },
      {
        id: "11.01.10.2001",
        nama: "Ladang Teungoh",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.10.2002",
        nama: "Pucok Krueng",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.10.2003",
        nama: "Silolo",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.10.2004",
        nama: "Kampung Baru",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.10.2005",
        nama: "Panton Bili",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.10.2006",
        nama: "Paya Ateuk",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.10.2007",
        nama: "Ladang Tuha",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.10.2008",
        nama: "Mata Ie",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.10.2009",
        nama: "Ujong Batee",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.10.2010",
        nama: "Lhok Sialang Cut",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.10.2011",
        nama: "Seuneubok",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.10.2012",
        nama: "Ie Mirah",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.10.2013",
        nama: "Pasie Rasian",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.10.2014",
        nama: "Ujung Padang Rasian",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.10.2015",
        nama: "Krueng Kalee",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.10.2016",
        nama: "Lhok Sialang Rayeuk",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.10.2017",
        nama: "Gampong Baro",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.10.2018",
        nama: "Teupin Gajah",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.10.2019",
        nama: "Ujung Padang Asahan",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.10.2020",
        nama: "Pulo Ie II",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.10.2021",
        nama: "Pante Raja",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.11",
        nama: "Labuhan Haji Timur",
        tingkat: "kecamatan"
      },
      {
        id: "11.01.11.2001",
        nama: "Tengah Peulumat",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.11.2002",
        nama: "Paya Peulumat",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.11.2003",
        nama: "Padang Peulumat",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.11.2004",
        nama: "Aur Peulumat",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.11.2005",
        nama: "Limau Saring",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.11.2006",
        nama: "Beutong",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.11.2007",
        nama: "Peuneulop",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.11.2008",
        nama: "Gunung Rotan",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.11.2009",
        nama: "Keumumu Hilir",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.11.2010",
        nama: "Keumumu Hulu",
        tingkat: "kelurahan"
      },
      {
        id: "11.01.11.2011",
        nama: "Keumumu Seberang",
        tingkat: "kelurahan"
      }
    ])
    console.log('----- Seeding Wilayah : Done')
  }
}
