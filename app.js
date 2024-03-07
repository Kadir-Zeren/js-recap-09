const mayislar = [5500, 8000, 6500, 9000, 10000, 15000, 25000];

const toplamMayis = mayislar.reduce((toplam, deger) => toplam + deger, 0);

console.log("TOPLAM MAYIS:", toplamMayis);

const zamliMaasToplami = mayislar.filter((m) => m >= 6000 && m <= 10000);
