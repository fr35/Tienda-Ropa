let stockProductos = [
    {id: 1, tipo: "remera", sexo: "hombre", nombre: "Remera Tarik", precio: 6250, descrpcion: "Remera Manga Corta", img: "fotos/id-1.jpeg"},
    {id: 2, tipo: "remera", sexo: "hombre", nombre: "Remera Brais", precio: 6250, descrpcion: "Remera Manga Corta", img: "fotos/id-2.jpeg"},
    {id: 3, tipo: "remera", sexo: "hombre", nombre: "Remera Lucky", precio: 6250, descrpcion: "Remera Manga Corta", img: "fotos/id-3.jpeg"},
    {id: 4, tipo: "remera", sexo: "hombre", nombre: "Remera Lucky", precio: 6250, descrpcion: "Remera Manga Corta", img: "fotos/id-4.jpeg"},
    {id: 5, tipo: "remera", sexo: "hombre", nombre: "Remera Brais", precio: 6250, descrpcion: "Remera Manga Corta", img: "fotos/id-5.jpeg"},
    {id: 6, tipo: "remera", sexo: "hombre", nombre: "Remera Manga Larga Cuello V", precio: 6250, descrpcion: "Remera Manga Larga", img: "fotos/id-6.jpeg"},
    {id: 7, tipo: "remera", sexo: "hombre", nombre: "Remera Manga Larga Cuello V", precio: 6250, descrpcion: "Remera Manga Larga", img: "fotos/id-7.jpeg"},
    {id: 8, tipo: "remera", sexo: "hombre", nombre: "Remera Zafir ML", precio: 3400, descrpcion: "Remera Manga Larga", img: "fotos/id-8.jpeg"},
    {id: 9, tipo: "remera", sexo: "hombre", nombre: "Remera ML Felix", precio: 3400, descrpcion: "Remera Manga Larga", img: "fotos/id-9.jpeg"},
    {id: 10, tipo: "remera", sexo: "hombre", nombre: "Remera Manga Larga Con Cartera", precio: 4050, descrpcion: "Remera Manga Larga", img: "fotos/id-10.jpeg"},
    {id: 11, tipo: "remera", sexo: "hombre", nombre: "Remera Wafle Manga Larga", precio: 3400, descrpcion: "Remera Manga Larga", img: "fotos/id-11.jpeg"},

    {id: 12, tipo: "buzo", sexo: "hombre", nombre: "Buzo Rustico Brandon", precio: 10300, descrpcion: "Buzo Cuello Redondo", img: "fotos/id-12.jpeg"},
    {id: 13, tipo: "buzo", sexo: "hombre", nombre: "Buzo Rustico Brandon", precio: 10300, descrpcion: "Buzo Cuello Redondo", img: "fotos/id-13.jpeg"},
    {id: 14, tipo: "buzo", sexo: "hombre", nombre: "Buzo Rustico Brandon", precio: 10300, descrpcion: "Buzo Cuello Redondo", img: "fotos/id-14.jpeg"},
    {id: 15, tipo: "buzo", sexo: "hombre", nombre: "Buzo Luxor", precio: 7550, descrpcion: "Buzo Con Capucha", img: "fotos/id-15.jpeg"},
    {id: 16, tipo: "buzo", sexo: "hombre", nombre: "Buzo Luxor", precio: 7550, descrpcion: "Buzo Con Capucha", img: "fotos/id-16.jpeg"},
    {id: 17, tipo: "buzo", sexo: "hombre", nombre: "Buzo Jazz", precio: 9150, descrpcion: "Buzo Rustico Cuello Redondo", img: "fotos/id-17.jpeg"},
    {id: 18, tipo: "buzo", sexo: "hombre", nombre: "Buzo Jazz", precio: 9150, descrpcion: "Buzo Rustico Cuello Redondo", img: "fotos/id-18.jpeg"},
    {id: 19, tipo: "buzo", sexo: "hombre", nombre: "Buzo Jazz", precio: 9150, descrpcion: "Buzo Rustico Cuello Redondo", img: "fotos/id-19.jpeg"},
    {id: 20, tipo: "buzo", sexo: "hombre", nombre: "Buzo Campera Combinada", precio: 12600, descrpcion: "Campera Con Cierre", img: "fotos/id-20.jpeg"},
    {id: 21, tipo: "buzo", sexo: "hombre", nombre: "Buzo Campera Combinada", precio: 12600, descrpcion: "Campera Con Cierre", img: "fotos/id-21.jpeg"},

    {id: 22, tipo: "campera", sexo: "hombre", nombre: "Campera Jill Jean", precio: 21850, descrpcion: "Campera Jean", img: "fotos/id-22.jpeg"},
    {id: 23, tipo: "campera", sexo: "hombre", nombre: "Campera Micro Matelasse", precio: 26500, descrpcion: "Campera Micro Matelasse", img: "fotos/id-23.jpeg"},
    {id: 24, tipo: "campera", sexo: "hombre", nombre: "Campera Reversible Matelasse", precio: 33400, descrpcion: "Campera Reversible", img: "fotos/id-24.jpeg"},
    {id: 25, tipo: "campera", sexo: "hombre", nombre: "Campera Con Capucha", precio: 33400, descrpcion: "Campera Con Capucha", img: "fotos/id-25.jpeg"},
    {id: 26, tipo: "campera", sexo: "hombre", nombre: "Campera Braxton Jean", precio: 12400, descrpcion: "Campera Jean", img: "fotos/id-26.jpeg"},
    {id: 27, tipo: "campera", sexo: "hombre", nombre: "Campera Parka Con Capucha", precio: 41500, descrpcion: "Campera Parka Larga", img: "fotos/id-27.jpeg"},
    {id: 28, tipo: "campera", sexo: "hombre", nombre: "Campera Microfibra 3/4", precio: 31100, descrpcion: "Campera Con Capucha", img: "fotos/id-28.jpeg"},

    {id: 29, tipo: "pantalon", sexo: "hombre", nombre: "Pantalón Jean Aiden", precio: 10850, descrpcion: "Jeans Tiro Medio", img: "fotos/id-29.jpeg"},
    {id: 30, tipo: "pantalon", sexo: "hombre", nombre: "Pantalón Jean Mason", precio: 10850, descrpcion: "Jeans Tiro Medio", img: "fotos/id-30.jpeg"},
    {id: 31, tipo: "pantalon", sexo: "hombre", nombre: "Pantalón Jean Thomas", precio: 10850, descrpcion: "Jeans Tiro Medio", img: "fotos/id-31.jpeg"},
    {id: 32, tipo: "pantalon", sexo: "hombre", nombre: "Pantalón Jean Sport Corderoy", precio: 14500, descrpcion: "Pantalón Tiro Medio", img: "fotos/id-32.jpeg"},
    {id: 33, tipo: "pantalon", sexo: "hombre", nombre: "Pantalón Jean Lona", precio: 9150, descrpcion: "Jeans Corte Clasico", img: "fotos/id-33.jpeg"},
    {id: 34, tipo: "pantalon", sexo: "hombre", nombre: "Pantalón Sport Corderoy", precio: 12500, descrpcion: "Pantalon Corte Clasico", img: "fotos/id-34.jpeg"},
    {id: 35, tipo: "pantalon", sexo: "hombre", nombre: "Pantalón Corderoy", precio: 17250, descrpcion: "Pantalon Corderoy", img: "fotos/id-35.jpeg"},
    {id: 36, tipo: "pantalon", sexo: "hombre", nombre: "Pantalón Jogger Royce", precio: 6150, descrpcion: "Jogger", img: "fotos/id-36.jpeg"},
    {id: 37, tipo: "pantalon", sexo: "hombre", nombre: "Pantalón Jogger Royce", precio: 8300, descrpcion: "Jogger", img: "fotos/id-37.jpeg"},
    {id: 38, tipo: "pantalon", sexo: "hombre", nombre: "Pantalón Jogger Royce", precio: 8300, descrpcion: "Jogger", img: "fotos/id-38.jpeg"},
    {id: 39, tipo: "pantalon", sexo: "hombre", nombre: "Pantalón Jogger Royce", precio: 8300, descrpcion: "Jogger", img: "fotos/id-39.jpeg"},
    {id: 40, tipo: "pantalon", sexo: "hombre", nombre: "Pantalón Jean Blanco", precio: 8100, descrpcion: "Jean Blanco", img: "fotos/id-40.jpeg"},
    {id: 41, tipo: "pantalon", sexo: "hombre", nombre: "Pantalón Jean Black", precio: 8100, descrpcion: "Jean Negro", img: "fotos/id-41.jpeg"},
    {id: 42, tipo: "pantalon", sexo: "hombre", nombre: "Pantalón Fantasía S100", precio: 9850, descrpcion: "Pantalón Vestir", img: "fotos/id-42.jpeg"},
    {id: 43, tipo: "pantalon", sexo: "hombre", nombre: "Pantalón Vestir Armani S100", precio: 10300, descrpcion: "Pantalón Vestir", img: "fotos/id-43.jpeg"},
    {id: 44, tipo: "pantalon", sexo: "hombre", nombre: "Pantalón Gabardina 5 Bols", precio: 14450, descrpcion: "Pantalón Gabardina", img: "fotos/id-44.jpeg"},
    {id: 45, tipo: "pantalon", sexo: "hombre", nombre: "Pantalón Vestir Clásico", precio: 8700, descrpcion: "Pantalón Vestir", img: "fotos/id-45.jpeg"},

    {id: 46, tipo: "sweater", sexo: "hombre", nombre: "Sweater Bamberg", precio: 12200, descrpcion: "Sweater Escote V", img: "fotos/id-46.jpeg"},
    {id: 47, tipo: "sweater", sexo: "hombre", nombre: "Sweater Loket", precio: 12200, descrpcion: "Sweater Escote V", img: "fotos/id-47.jpeg"},
    {id: 48, tipo: "sweater", sexo: "hombre", nombre: "Sweater Loket", precio: 12200, descrpcion: "Sweater Escote V", img: "fotos/id-48.jpeg"},
    {id: 49, tipo: "sweater", sexo: "hombre", nombre: "Sweater Bamberg", precio: 12200, descrpcion: "Sweater Escote V", img: "fotos/id-49.jpeg"},
    {id: 50, tipo: "sweater", sexo: "hombre", nombre: "Sweater Breck", precio: 12300, descrpcion: "Sweater Escote V", img: "fotos/id-50.jpeg"},
    {id: 51, tipo: "sweater", sexo: "hombre", nombre: "Sweater Escote Redondo", precio: 8700, descrpcion: "Sweater Escote Redondo", img: "fotos/id-51.jpeg"},
    {id: 52, tipo: "sweater", sexo: "hombre", nombre: "Sweater Cárdigan Algodón", precio: 15050, descrpcion: "Sweater Cárdigan Algodón", img: "fotos/id-52.jpeg"},
    {id: 53, tipo: "sweater", sexo: "hombre", nombre: "Sweater Cárdigan Algodón", precio: 15050, descrpcion: "Sweater Cárdigan Algodón", img: "fotos/id-53.jpeg"},
    {id: 54, tipo: "sweater", sexo: "hombre", nombre: "Sweater Mirko", precio: 8100, descrpcion: "Sweater Escote V", img: "fotos/id-54.jpeg"},
    {id: 55, tipo: "sweater", sexo: "hombre", nombre: "Chomba Matthew Manga Larga", precio: 8000, descrpcion: "Chomba Sweater", img: "fotos/id-55.jpeg"},

    {id: 56, tipo: "saco", sexo: "hombre", nombre: "Saco Coderina Santiago", precio: 40350, descrpcion: "Saco Sport Regular Fit", img: "fotos/id-56.jpeg"},
    {id: 57, tipo: "saco", sexo: "hombre", nombre: "Saco Sport Regular", precio: 48900, descrpcion: "Saco Sport Regular", img: "fotos/id-57.jpeg"},
    {id: 58, tipo: "saco", sexo: "hombre", nombre: "Saco Sport Lana", precio: 46100, descrpcion: "Saco Sport Lana", img: "fotos/id-58.jpeg"},
    {id: 59, tipo: "saco", sexo: "hombre", nombre: "Saco Slim Fit Lana", precio: 36400, descrpcion: "Saco Slim Fit Lana", img: "fotos/id-59.jpeg"},
    {id: 60, tipo: "saco", sexo: "hombre", nombre: "Saco Corderoy Wally", precio: 20800, descrpcion: "Saco Corderoy", img: "fotos/id-60.jpeg"},
    {id: 61, tipo: "saco", sexo: "hombre", nombre: "Saco Sport Escocés", precio: 27650, descrpcion: "Saco Sport", img: "fotos/id-61.jpeg"},
    {id: 62, tipo: "saco", sexo: "hombre", nombre: "Saco Sport Plaque", precio: 29950, descrpcion: "Saco Sport", img: "fotos/id-62.jpeg"},
    {id: 63, tipo: "saco", sexo: "hombre", nombre: "Blazer Sport", precio: 33400, descrpcion: "Blazer Sport", img: "fotos/id-63.jpeg"},
    {id: 64, tipo: "saco", sexo: "hombre", nombre: "Saco Sport Cuadros Slim Fit", precio: 39200, descrpcion: "Saco Sport Slim Fit", img: "fotos/id-64.jpeg"},
    {id: 65, tipo: "saco", sexo: "hombre", nombre: "Saco Sport Velvet", precio: 15600, descrpcion: "Saco Sport", img: "fotos/id-65.jpeg"},

    {id: 66, tipo: "abrigo", sexo: "hombre", nombre: "Sobretodo Lana Vaduz", precio: 51900, descrpcion: "Sobretodo Lana", img: "fotos/id-66.jpeg"},
    {id: 67, tipo: "abrigo", sexo: "hombre", nombre: "Sobretodo Lana Vaduz", precio: 51900, descrpcion: "Sobretodo Lana", img: "fotos/id-67.jpeg"},
    {id: 68, tipo: "abrigo", sexo: "hombre", nombre: "Sobretodo Velour Blue", precio: 42650, descrpcion: "Sobretodo Paño", img: "fotos/id-68.jpeg"},
    {id: 69, tipo: "abrigo", sexo: "hombre", nombre: "Sobretodo Velour Black", precio: 42650, descrpcion: "Sobretodo Paño", img: "fotos/id-69.jpeg"},
    {id: 70, tipo: "abrigo", sexo: "hombre", nombre: "Sobretodo Velour Gris", precio: 42650, descrpcion: "Sobretodo Paño", img: "fotos/id-70.jpeg"},
    {id: 71, tipo: "abrigo", sexo: "hombre", nombre: "Campera Lana Liam", precio: 23100, descrpcion: "Campera Lana", img: "fotos/id-71.jpeg"},


    {id: 72, tipo: "remera", sexo: "mujer", nombre: "Remera Astrid", precio: 5700, descrpcion: "Remera Manga Corta", img: "fotos/id-72.jpeg"},
    {id: 73, tipo: "remera", sexo: "mujer", nombre: "Remera Astrid", precio: 5700, descrpcion: "Remera Manga Corta", img: "fotos/id-73.jpeg"},
    {id: 74, tipo: "remera", sexo: "mujer", nombre: "Remera Havana", precio: 6250, descrpcion: "Remera Manga Corta", img: "fotos/id-74.jpeg"},
    {id: 75, tipo: "remera", sexo: "mujer", nombre: "Remera Havana", precio: 6250, descrpcion: "Remera Manga Corta", img: "fotos/id-75.jpeg"},
    {id: 76, tipo: "remera", sexo: "mujer", nombre: "Remera Pia", precio: 6850, descrpcion: "Remera Manga Larga", img: "fotos/id-76.jpeg"},
    {id: 77, tipo: "remera", sexo: "mujer", nombre: "Remera Pia", precio: 6850, descrpcion: "Remera Manga Larga", img: "fotos/id-77.jpeg"},
    {id: 78, tipo: "remera", sexo: "mujer", nombre: "Remera Amaia", precio: 5700, descrpcion: "Remera Manga Corta", img: "fotos/id-78.jpeg"},
    {id: 79, tipo: "remera", sexo: "mujer", nombre: "Musculosa Saturnina", precio: 2550, descrpcion: "Musculosa", img: "fotos/id-79.jpeg"},
    {id: 80, tipo: "remera", sexo: "mujer", nombre: "Remera Flowers", precio: 3700, descrpcion: "Remera Manga Corta", img: "fotos/id-80.jpeg"},
    {id: 81, tipo: "remera", sexo: "mujer", nombre: "Remera Melania", precio: 3750, descrpcion: "Remera Manga Corta", img: "fotos/id-81.jpeg"},
    {id: 82, tipo: "remera", sexo: "mujer", nombre: "Remera Zenda", precio: 3750, descrpcion: "Remera Manga Corta", img: "fotos/id-82.jpeg"},
    {id: 83, tipo: "remera", sexo: "mujer", nombre: "Remera Melania", precio: 3750, descrpcion: "Remera Manga Corta", img: "fotos/id-83.jpeg"},
    {id: 84, tipo: "remera", sexo: "mujer", nombre: "Remera Bretel Abril", precio: 5200, descrpcion: "Remera Bretel Fino", img: "fotos/id-84.jpeg"},
    {id: 85, tipo: "remera", sexo: "mujer", nombre: "Remera Bretel Abril", precio: 5200, descrpcion: "Remera Bretel Fino", img: "fotos/id-85.jpeg"},
    {id: 86, tipo: "remera", sexo: "mujer", nombre: "Remera Ischia", precio: 2350, descrpcion: "Remera Manga Corta", img: "fotos/id-86.jpeg"},
    {id: 87, tipo: "remera", sexo: "mujer", nombre: "Remera Loren", precio: 2350, descrpcion: "Remera Manga Corta", img: "fotos/id-87.jpeg"},
    {id: 88, tipo: "remera", sexo: "mujer", nombre: "Remera Eimy", precio: 3400, descrpcion: "Remera Manga Corta", img: "fotos/id-88.jpeg"},
    {id: 89, tipo: "remera", sexo: "mujer", nombre: "Remera Eimy", precio: 3400, descrpcion: "Remera Manga Corta", img: "fotos/id-89.jpeg"},
    {id: 90, tipo: "remera", sexo: "mujer", nombre: "Remera Bretel Aleeza", precio: 2350, descrpcion: "Remera Bretel Fino", img: "fotos/id-90.jpeg"},

    {id: 91, tipo: "pantalón", sexo: "mujer", nombre: "Pantalón Vestir Saril", precio: 13300, descrpcion: "Pantalón Vestir", img: "fotos/id-91.jpeg"},
    {id: 92, tipo: "pantalón", sexo: "mujer", nombre: "Pantalón Jean Melaka", precio: 9900, descrpcion: "Jean", img: "fotos/id-92.jpeg"},
    {id: 93, tipo: "pantalón", sexo: "mujer", nombre: "Pantalón Rustico Spica", precio: 8750, descrpcion: "Pantalón Rustico", img: "fotos/id-93.jpeg"},
    {id: 94, tipo: "pantalón", sexo: "mujer", nombre: "Pantalón Morley Altair", precio: 4650, descrpcion: "Pantalón Fuseau Morley", img: "fotos/id-94.jpeg"},
    {id: 95, tipo: "pantalón", sexo: "mujer", nombre: "Pantalón Mom Penny", precio: 9150, descrpcion: "Jean", img: "fotos/id-95.jpeg"},
    {id: 96, tipo: "pantalón", sexo: "mujer", nombre: "Pantalón Punto Marker", precio: 12600, descrpcion: "Pantalón Punto Monaco", img: "fotos/id-96.jpeg"},
    {id: 97, tipo: "pantalón", sexo: "mujer", nombre: "Pantalón Matilde", precio: 6500, descrpcion: "Pantalón Tipo Palazo", img: "fotos/id-97.jpeg"},
    {id: 98, tipo: "pantalón", sexo: "mujer", nombre: "Pantalón Jean", precio: 7300, descrpcion: "Jean", img: "fotos/id-98.jpeg"},
    {id: 99, tipo: "pantalón", sexo: "mujer", nombre: "Pantalón Jean", precio: 7300, descrpcion: "Jean", img: "fotos/id-99.jpeg"},
    {id: 100, tipo: "pantalón", sexo: "mujer", nombre: "Pantalón Jean", precio: 7300, descrpcion: "Jean", img: "fotos/id-100.jpeg"},
    {id: 101, tipo: "pantalón", sexo: "mujer", nombre: "Pantalón Jean Saten", precio: 7300, descrpcion: "Jean", img: "fotos/id-101.jpeg"},
    {id: 102, tipo: "pantalón", sexo: "mujer", nombre: "Pantalón Jean Tiro Alto", precio: 7300, descrpcion: "Jean", img: "fotos/id-102.jpeg"},
    {id: 103, tipo: "pantalón", sexo: "mujer", nombre: "Pantalón Vestir Velma", precio: 6950, descrpcion: "Pantalón Vestir", img: "fotos/id-103.jpeg"},
    {id: 104, tipo: "pantalón", sexo: "mujer", nombre: "Pantalón Jean Black", precio: 7300, descrpcion: "Jean", img: "fotos/id-104.jpeg"},
    {id: 105, tipo: "pantalón", sexo: "mujer", nombre: "Pantalón Vestir Saril", precio: 9150, descrpcion: "Pantalón Vestir", img: "fotos/id-105.jpeg"},
    {id: 106, tipo: "pantalón", sexo: "mujer", nombre: "Pantalón Jean Linda", precio: 5200, descrpcion: "Jean", img: "fotos/id-106.jpeg"},
    {id: 107, tipo: "pantalón", sexo: "mujer", nombre: "Pantalón Gabardina Janet", precio: 5200, descrpcion: "Pantalón Gabardino", img: "fotos/id-107.jpeg"},
    {id: 108, tipo: "pantalón", sexo: "mujer", nombre: "Pantalón Palazzo Galit", precio: 6400, descrpcion: "Pantalón Vestir", img: "fotos/id-108.jpeg"},
    {id: 109, tipo: "pantalón", sexo: "mujer", nombre: "Pantalón Slim Audrie", precio: 6400, descrpcion: "Pantalón Vestir", img: "fotos/id-109.jpeg"},
    {id: 110, tipo: "pantalón", sexo: "mujer", nombre: "Pantalón Slim Audrie", precio: 6400, descrpcion: "Pantalón Vestir", img: "fotos/id-110.jpeg"},
    {id: 111, tipo: "pantalón", sexo: "mujer", nombre: "Pantalón Jean Bianca", precio: 5200, descrpcion: "Jean", img: "fotos/id-111.jpeg"},
    {id: 112, tipo: "pantalón", sexo: "mujer", nombre: "Pantalón Simil Cuero Harami", precio: 6400, descrpcion: "Pantalón Vestir", img: "fotos/id-112.jpeg"},

    {id: 113, tipo: "campera", sexo: "mujer", nombre: "Buzo Elnath", precio: 10300, descrpcion: "Buzo Con Capucha", img: "fotos/id-113.jpeg"},
    {id: 114, tipo: "campera", sexo: "mujer", nombre: "Buzo Shaula", precio: 9150, descrpcion: "Buzo Con Cierre", img: "fotos/id-114.jpeg"},
    {id: 115, tipo: "campera", sexo: "mujer", nombre: "Campera Mujer Nylon", precio: 24850, descrpcion: "Campera Con Capucha", img: "fotos/id-115.jpeg"},
    {id: 116, tipo: "campera", sexo: "mujer", nombre: "Campera Parka Sisi", precio: 24850, descrpcion: "Campera Parka", img: "fotos/id-116.jpeg"},
    {id: 117, tipo: "campera", sexo: "mujer", nombre: "Trench Impermeable Piloto", precio: 25350, descrpcion: "Trench Microfibra Mujer", img: "fotos/id-117.jpeg"},
    {id: 118, tipo: "campera", sexo: "mujer", nombre: "Campera Motoquera Leyre", precio: 28900, descrpcion: "Campera Simil Suade", img: "fotos/id-118.jpeg"},
    {id: 119, tipo: "campera", sexo: "mujer", nombre: "Campera Motoquera Leyre", precio: 28900, descrpcion: "Campera Simil Suade", img: "fotos/id-119.jpeg"},
    {id: 120, tipo: "campera", sexo: "mujer", nombre: "Campera Corderoy Rita", precio: 26500, descrpcion: "Campera Mujer Corderoy", img: "fotos/id-120.jpeg"},

    {id: 121, tipo: "sweater", sexo: "mujer", nombre: "Sweater Oversize Filli", precio: 8000, descrpcion: "Sweater Cuello Redondo", img: "fotos/id-121.jpeg"},
    {id: 122, tipo: "sweater", sexo: "mujer", nombre: "Poleron Becrux", precio: 8000, descrpcion: "Poleron Lanilla", img: "fotos/id-122.jpeg"},
    {id: 123, tipo: "sweater", sexo: "mujer", nombre: "Sweater Marcella", precio: 12500, descrpcion: "Sweater Cuello Redondo", img: "fotos/id-123.jpeg"},
    {id: 124, tipo: "sweater", sexo: "mujer", nombre: "Polera Pame", precio: 9150, descrpcion: "Polera", img: "fotos/id-124.jpeg"},
    {id: 125, tipo: "sweater", sexo: "mujer", nombre: "Polera Mali", precio: 13300, descrpcion: "Polera", img: "fotos/id-125.jpeg"},
    {id: 126, tipo: "sweater", sexo: "mujer", nombre: "Sweater Nayla", precio: 9150, descrpcion: "Sweater Escote En V", img: "fotos/id-126.jpeg"},
    {id: 127, tipo: "sweater", sexo: "mujer", nombre: "Cardigan Blosson", precio: 12050, descrpcion: "Cardigan", img: "fotos/id-127.jpeg"},
    {id: 128, tipo: "sweater", sexo: "mujer", nombre: "Sweater Nayla", precio: 9150, descrpcion: "Sweater Escote En V", img: "fotos/id-128.jpeg"},
    {id: 129, tipo: "sweater", sexo: "mujer", nombre: "Poncho Tejido Pia", precio: 9150, descrpcion: "Poncho Tejido", img: "fotos/id-129.jpeg"},
    {id: 130, tipo: "sweater", sexo: "mujer", nombre: "Saco Tejido Sara", precio: 12600, descrpcion: "Saco Tejido", img: "fotos/id-130.jpeg"},
    {id: 131, tipo: "sweater", sexo: "mujer", nombre: "Saco Tejido Chiara", precio: 15050, descrpcion: "Saco Tejido", img: "fotos/id-131.jpeg"},
    {id: 132, tipo: "sweater", sexo: "mujer", nombre: "Sweater Oversize Emma", precio: 17350, descrpcion: "Sweater Cuello Redondo", img: "fotos/id-132.jpeg"},

    {id: 133, tipo: "saco", sexo: "mujer", nombre: "Saco Cruzado Fantasía", precio: 27050, descrpcion: "Saco Cruzado", img: "fotos/id-133.jpeg"},
    {id: 134, tipo: "saco", sexo: "mujer", nombre: "Saco Cruzado Monroe", precio: 26500, descrpcion: "Saco Cruzado", img: "fotos/id-134.jpeg"},
    {id: 135, tipo: "saco", sexo: "mujer", nombre: "Saco Sport Fillipa", precio: 34550, descrpcion: "Saco Sport Corto Lana", img: "fotos/id-135.jpeg"},
    {id: 136, tipo: "saco", sexo: "mujer", nombre: "Saco Sport Fausta", precio: 19650, descrpcion: "Saco Sport", img: "fotos/id-136.jpeg"},
    {id: 137, tipo: "saco", sexo: "mujer", nombre: "Saco Sport Magui", precio: 17350, descrpcion: "Saco Sport", img: "fotos/id-137.jpeg"},

    {id: 138, tipo: "abrigo", sexo: "mujer", nombre: "Sobretodo Paño Eva", precio: 34550, descrpcion: "Sobretodo Con Lazo 1 Botón", img: "fotos/id-138.jpeg"},
    {id: 139, tipo: "abrigo", sexo: "mujer", nombre: "Tapado Largo Nuria", precio: 38050, descrpcion: "Tapado De Paño Con Lazo", img: "fotos/id-139.jpeg"},

    {id: 140, tipo: "vestido", sexo: "mujer", nombre: "Vestido Twill Merian", precio: 14500, descrpcion: "Vestido Manga Larga", img: "fotos/id-140.jpeg"},
    {id: 141, tipo: "vestido", sexo: "mujer", nombre: "Vestido Camisero Akila", precio: 16100, descrpcion: "Vestido Camisero", img: "fotos/id-141.jpeg"},
    {id: 142, tipo: "vestido", sexo: "mujer", nombre: "Vestido Morley Polux", precio: 8000, descrpcion: "Vestido Morely", img: "fotos/id-142.jpeg"},
    {id: 143, tipo: "vestido", sexo: "mujer", nombre: "Vestido Path", precio: 14950, descrpcion: "Vestido Plizado Seda", img: "fotos/id-143.jpeg"},
    {id: 144, tipo: "vestido", sexo: "mujer", nombre: "Vestido Largo Candy", precio: 9700, descrpcion: "Vestido Largo Camisero", img: "fotos/id-144.jpeg"},
    {id: 145, tipo: "vestido", sexo: "mujer", nombre: "Vestido Path", precio: 14950, descrpcion: "Vestido Plizado Seda", img: "fotos/id-145.jpeg"},

    {id: 146, tipo: "pollera", sexo: "mujer", nombre: "Pollera Coco", precio: 9150, descrpcion: "Pollera Sastrera", img: "fotos/id-146.jpeg"},
    {id: 147, tipo: "pollera", sexo: "mujer", nombre: "Pollera Corta Dorothy", precio: 6850, descrpcion: "Pollera Corta Sastrera", img: "fotos/id-147.jpeg"},
    {id: 148, tipo: "pollera", sexo: "mujer", nombre: "Pollera Noche Amarillis", precio: 12750, descrpcion: "Pollera Noche Cruzada", img: "fotos/id-148.jpeg"},
    {id: 149, tipo: "pollera", sexo: "mujer", nombre: "Pollera Corta Dorothy", precio: 6850, descrpcion: "Pollera Corta Sastrera", img: "fotos/id-149.jpeg"},
    {id: 150, tipo: "pollera", sexo: "mujer", nombre: "Pollera Noche Amarillis", precio: 12750, descrpcion: "Pollera Noche Cruzada", img: "fotos/id-150.jpeg"},
    {id: 151, tipo: "pollera", sexo: "mujer", nombre: "Pollera Dafne", precio: 7450, descrpcion: "Pollera con Bolsillos", img: "fotos/id-151.jpeg"},
]



let stockMujer = [

]

let stockHombreRemera = [
    {id: 1, tipo: "remera", sexo: "hombre", nombre: "Remera Tarik", precio: 6250, descrpcion: "Remera Manga Corta", img: "fotos/id-1.jpeg"},
    {id: 2, tipo: "remera", sexo: "hombre", nombre: "Remera Brais", precio: 6250, descrpcion: "Remera Manga Corta", img: "fotos/id-2.jpeg"},
    {id: 3, tipo: "remera", sexo: "hombre", nombre: "Remera Lucky", precio: 6250, descrpcion: "Remera Manga Corta", img: "fotos/id-3.jpeg"},
    {id: 4, tipo: "remera", sexo: "hombre", nombre: "Remera Lucky", precio: 6250, descrpcion: "Remera Manga Corta", img: "fotos/id-4.jpeg"},
    {id: 5, tipo: "remera", sexo: "hombre", nombre: "Remera Brais", precio: 6250, descrpcion: "Remera Manga Corta", img: "fotos/id-5.jpeg"},
    {id: 6, tipo: "remera", sexo: "hombre", nombre: "Remera Manga Larga Cuello V", precio: 6250, descrpcion: "Remera Manga Larga", img: "fotos/id-6.jpeg"},
    {id: 7, tipo: "remera", sexo: "hombre", nombre: "Remera Manga Larga Cuello V", precio: 6250, descrpcion: "Remera Manga Larga", img: "fotos/id-7.jpeg"},
    {id: 8, tipo: "remera", sexo: "hombre", nombre: "Remera Zafir ML", precio: 3400, descrpcion: "Remera Manga Larga", img: "fotos/id-8.jpeg"},
    {id: 9, tipo: "remera", sexo: "hombre", nombre: "Remera ML Felix", precio: 3400, descrpcion: "Remera Manga Larga", img: "fotos/id-9.jpeg"},
    {id: 10, tipo: "remera", sexo: "hombre", nombre: "Remera Manga Larga Con Cartera", precio: 4050, descrpcion: "Remera Manga Larga", img: "fotos/id-10.jpeg"},
    {id: 11, tipo: "remera", sexo: "hombre", nombre: "Remera Wafle Manga Larga", precio: 3400, descrpcion: "Remera Manga Larga", img: "fotos/id-11.jpeg"},
]

let stockHombreBuzo = [
    {id: 1, tipo: "buzo", sexo: "hombre", nombre: "Buzo Rustico Brandon", precio: 10300, descrpcion: "Buzo Cuello Redondo", img: "fotos/id-12.jpeg"},
    {id: 2, tipo: "buzo", sexo: "hombre", nombre: "Buzo Rustico Brandon", precio: 10300, descrpcion: "Buzo Cuello Redondo", img: "fotos/id-13.jpeg"},
    {id: 3, tipo: "buzo", sexo: "hombre", nombre: "Buzo Rustico Brandon", precio: 10300, descrpcion: "Buzo Cuello Redondo", img: "fotos/id-14.jpeg"},
    {id: 4, tipo: "buzo", sexo: "hombre", nombre: "Buzo Luxor", precio: 7550, descrpcion: "Buzo Con Capucha", img: "fotos/id-15.jpeg"},
    {id: 5, tipo: "buzo", sexo: "hombre", nombre: "Buzo Luxor", precio: 7550, descrpcion: "Buzo Con Capucha", img: "fotos/id-16.jpeg"},
    {id: 6, tipo: "buzo", sexo: "hombre", nombre: "Buzo Jazz", precio: 9150, descrpcion: "Buzo Rustico Cuello Redondo", img: "fotos/id-17.jpeg"},
    {id: 7, tipo: "buzo", sexo: "hombre", nombre: "Buzo Jazz", precio: 9150, descrpcion: "Buzo Rustico Cuello Redondo", img: "fotos/id-18.jpeg"},
    {id: 8, tipo: "buzo", sexo: "hombre", nombre: "Buzo Jazz", precio: 9150, descrpcion: "Buzo Rustico Cuello Redondo", img: "fotos/id-19.jpeg"},
    {id: 9, tipo: "buzo", sexo: "hombre", nombre: "Buzo Campera Combinada", precio: 12600, descrpcion: "Campera Con Cierre", img: "fotos/id-20.jpeg"},
    {id: 10, tipo: "buzo", sexo: "hombre", nombre: "Buzo Campera Combinada", precio: 12600, descrpcion: "Campera Con Cierre", img: "fotos/id-21.jpeg"},
]

let stockHombrePantalon = [
    {id: 1, tipo: "pantalon", sexo: "hombre", nombre: "Pantalón Jean Aiden", precio: 10850, descrpcion: "Jeans Tiro Medio", img: "fotos/id-29.jpeg"},
    {id: 2, tipo: "pantalon", sexo: "hombre", nombre: "Pantalón Jean Mason", precio: 10850, descrpcion: "Jeans Tiro Medio", img: "fotos/id-30.jpeg"},
    {id: 3, tipo: "pantalon", sexo: "hombre", nombre: "Pantalón Jean Thomas", precio: 10850, descrpcion: "Jeans Tiro Medio", img: "fotos/id-31.jpeg"},
    {id: 4, tipo: "pantalon", sexo: "hombre", nombre: "Pantalón Jean Sport Corderoy", precio: 14500, descrpcion: "Pantalón Tiro Medio", img: "fotos/id-32.jpeg"},
    {id: 5, tipo: "pantalon", sexo: "hombre", nombre: "Pantalón Jean Lona", precio: 9150, descrpcion: "Jeans Corte Clasico", img: "fotos/id-33.jpeg"},
    {id: 6, tipo: "pantalon", sexo: "hombre", nombre: "Pantalón Sport Corderoy", precio: 12500, descrpcion: "Pantalon Corte Clasico", img: "fotos/id-34.jpeg"},
    {id: 7, tipo: "pantalon", sexo: "hombre", nombre: "Pantalón Corderoy", precio: 17250, descrpcion: "Pantalon Corderoy", img: "fotos/id-35.jpeg"},
    {id: 8, tipo: "pantalon", sexo: "hombre", nombre: "Pantalón Jogger Royce", precio: 6150, descrpcion: "Jogger", img: "fotos/id-36.jpeg"},
    {id: 9, tipo: "pantalon", sexo: "hombre", nombre: "Pantalón Jogger Royce", precio: 8300, descrpcion: "Jogger", img: "fotos/id-37.jpeg"},
    {id: 10, tipo: "pantalon", sexo: "hombre", nombre: "Pantalón Jogger Royce", precio: 8300, descrpcion: "Jogger", img: "fotos/id-38.jpeg"},
    {id: 11, tipo: "pantalon", sexo: "hombre", nombre: "Pantalón Jogger Royce", precio: 8300, descrpcion: "Jogger", img: "fotos/id-39.jpeg"},
    {id: 12, tipo: "pantalon", sexo: "hombre", nombre: "Pantalón Jean Blanco", precio: 8100, descrpcion: "Jean Blanco", img: "fotos/id-40.jpeg"},
    {id: 13, tipo: "pantalon", sexo: "hombre", nombre: "Pantalón Jean Black", precio: 8100, descrpcion: "Jean Negro", img: "fotos/id-41.jpeg"},
    {id: 14, tipo: "pantalon", sexo: "hombre", nombre: "Pantalón Fantasía S100", precio: 9850, descrpcion: "Pantalón Vestir", img: "fotos/id-42.jpeg"},
    {id: 15, tipo: "pantalon", sexo: "hombre", nombre: "Pantalón Vestir Armani S100", precio: 10300, descrpcion: "Pantalón Vestir", img: "fotos/id-43.jpeg"},
    {id: 16, tipo: "pantalon", sexo: "hombre", nombre: "Pantalón Gabardina 5 Bols", precio: 14450, descrpcion: "Pantalón Gabardina", img: "fotos/id-44.jpeg"},
    {id: 17, tipo: "pantalon", sexo: "hombre", nombre: "Pantalón Vestir Clásico", precio: 8700, descrpcion: "Pantalón Vestir", img: "fotos/id-45.jpeg"},
    ]

let stockHombreCampera = [
    {id: 1, tipo: "campera", sexo: "hombre", nombre: "Campera Jill Jean", precio: 21850, descrpcion: "Campera Jean", img: "fotos/id-22.jpeg"},
    {id: 2, tipo: "campera", sexo: "hombre", nombre: "Campera Micro Matelasse", precio: 26500, descrpcion: "Campera Micro Matelasse", img: "fotos/id-23.jpeg"},
    {id: 3, tipo: "campera", sexo: "hombre", nombre: "Campera Reversible Matelasse", precio: 33400, descrpcion: "Campera Reversible", img: "fotos/id-24.jpeg"},
    {id: 4, tipo: "campera", sexo: "hombre", nombre: "Campera Con Capucha", precio: 33400, descrpcion: "Campera Con Capucha", img: "fotos/id-25.jpeg"},
    {id: 5, tipo: "campera", sexo: "hombre", nombre: "Campera Braxton Jean", precio: 12400, descrpcion: "Campera Jean", img: "fotos/id-26.jpeg"},
    {id: 6, tipo: "campera", sexo: "hombre", nombre: "Campera Parka Con Capucha", precio: 41500, descrpcion: "Campera Parka Larga", img: "fotos/id-27.jpeg"},
    {id: 7, tipo: "campera", sexo: "hombre", nombre: "Campera Microfibra 3/4", precio: 31100, descrpcion: "Campera Con Capucha", img: "fotos/id-28.jpeg"},
]

let stockHombreSweater = [
    {id: 1, tipo: "sweater", sexo: "hombre", nombre: "Sweater Bamberg", precio: 12200, descrpcion: "Sweater Escote V", img: "fotos/id-46.jpeg"},
    {id: 2, tipo: "sweater", sexo: "hombre", nombre: "Sweater Loket", precio: 12200, descrpcion: "Sweater Escote V", img: "fotos/id-47.jpeg"},
    {id: 3, tipo: "sweater", sexo: "hombre", nombre: "Sweater Loket", precio: 12200, descrpcion: "Sweater Escote V", img: "fotos/id-48.jpeg"},
    {id: 4, tipo: "sweater", sexo: "hombre", nombre: "Sweater Bamberg", precio: 12200, descrpcion: "Sweater Escote V", img: "fotos/id-49.jpeg"},
    {id: 5, tipo: "sweater", sexo: "hombre", nombre: "Sweater Breck", precio: 12300, descrpcion: "Sweater Escote V", img: "fotos/id-50.jpeg"},
    {id: 6, tipo: "sweater", sexo: "hombre", nombre: "Sweater Escote Redondo", precio: 8700, descrpcion: "Sweater Escote Redondo", img: "fotos/id-51.jpeg"},
    {id: 7, tipo: "sweater", sexo: "hombre", nombre: "Sweater Cárdigan Algodón", precio: 15050, descrpcion: "Sweater Cárdigan Algodón", img: "fotos/id-52.jpeg"},
    {id: 8, tipo: "sweater", sexo: "hombre", nombre: "Sweater Cárdigan Algodón", precio: 15050, descrpcion: "Sweater Cárdigan Algodón", img: "fotos/id-53.jpeg"},
    {id: 9, tipo: "sweater", sexo: "hombre", nombre: "Sweater Mirko", precio: 8100, descrpcion: "Sweater Escote V", img: "fotos/id-54.jpeg"},
    {id: 10, tipo: "sweater", sexo: "hombre", nombre: "Chomba Matthew Manga Larga", precio: 8000, descrpcion: "Chomba Sweater", img: "fotos/id-55.jpeg"},
]

let stockHombreSaco = [
    {id: 1, tipo: "saco", sexo: "hombre", nombre: "Saco Coderina Santiago", precio: 40350, descrpcion: "Saco Sport Regular Fit", img: "fotos/id-56.jpeg"},
    {id: 2, tipo: "saco", sexo: "hombre", nombre: "Saco Sport Regular", precio: 48900, descrpcion: "Saco Sport Regular", img: "fotos/id-57.jpeg"},
    {id: 3, tipo: "saco", sexo: "hombre", nombre: "Saco Sport Lana", precio: 46100, descrpcion: "Saco Sport Lana", img: "fotos/id-58.jpeg"},
    {id: 4, tipo: "saco", sexo: "hombre", nombre: "Saco Slim Fit Lana", precio: 36400, descrpcion: "Saco Slim Fit Lana", img: "fotos/id-59.jpeg"},
    {id: 5, tipo: "saco", sexo: "hombre", nombre: "Saco Corderoy Wally", precio: 20800, descrpcion: "Saco Corderoy", img: "fotos/id-60.jpeg"},
    {id: 6, tipo: "saco", sexo: "hombre", nombre: "Saco Sport Escocés", precio: 27650, descrpcion: "Saco Sport", img: "fotos/id-61.jpeg"},
    {id: 7, tipo: "saco", sexo: "hombre", nombre: "Saco Sport Plaque", precio: 29950, descrpcion: "Saco Sport", img: "fotos/id-62.jpeg"},
    {id: 8, tipo: "saco", sexo: "hombre", nombre: "Blazer Sport", precio: 33400, descrpcion: "Blazer Sport", img: "fotos/id-63.jpeg"},
    {id: 9, tipo: "saco", sexo: "hombre", nombre: "Saco Sport Cuadros Slim Fit", precio: 39200, descrpcion: "Saco Sport Slim Fit", img: "fotos/id-64.jpeg"},
    {id: 10, tipo: "saco", sexo: "hombre", nombre: "Saco Sport Velvet", precio: 15600, descrpcion: "Saco Sport", img: "fotos/id-65.jpeg"},
]

let stockHombreAbrigo = [
    {id: 1, tipo: "abrigo", sexo: "hombre", nombre: "Sobretodo Lana Vaduz", precio: 51900, descrpcion: "Sobretodo Lana", img: "fotos/id-66.jpeg"},
    {id: 2, tipo: "abrigo", sexo: "hombre", nombre: "Sobretodo Lana Vaduz", precio: 51900, descrpcion: "Sobretodo Lana", img: "fotos/id-67.jpeg"},
    {id: 3, tipo: "abrigo", sexo: "hombre", nombre: "Sobretodo Velour Blue", precio: 42650, descrpcion: "Sobretodo Paño", img: "fotos/id-68.jpeg"},
    {id: 4, tipo: "abrigo", sexo: "hombre", nombre: "Sobretodo Velour Black", precio: 42650, descrpcion: "Sobretodo Paño", img: "fotos/id-69.jpeg"},
    {id: 5, tipo: "abrigo", sexo: "hombre", nombre: "Sobretodo Velour Gris", precio: 42650, descrpcion: "Sobretodo Paño", img: "fotos/id-70.jpeg"},
    {id: 6, tipo: "abrigo", sexo: "hombre", nombre: "Campera Lana Liam", precio: 23100, descrpcion: "Campera Lana", img: "fotos/id-71.jpeg"},
]