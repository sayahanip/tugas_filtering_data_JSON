let data = {
    motor: [
        {
            id: 1,
            namaMotor: 'Motor Supra',
            tahunKeluaran: 2010,
            warna: 'Merah',
            lokasi: {
                alamat: 'Jalan Raya 123',
                kota: 'Blitar',
                kecamatan: 'Sananwetan',
                kodePos: '66137'
            },
            harga: {
                biaya: 10000000
            }
        },
        {
            id: 2,
            namaMotor: 'Motor Revo',
            tahunKeluaran: 2015,
            warna: 'Biru',
            lokasi: {
                alamat: 'Jalan Melati 456',
                kota: 'Blitar',
                kecamatan: 'Kepanjenkidul',
                kodePos: '66117'
            },
            harga: {
                biaya: 12000000
            }
        },
        {
            id: 3,
            namaMotor: 'Motor Astrea',
            tahunKeluaran: 2005,
            warna: 'Hitam',
            lokasi: {
                alamat: 'Jalan Kenanga 789',
                kota: 'Blitar',
                kecamatan: 'Sukorejo',
                kodePos: '66121'
            },
            harga: {
                biaya: 9000000
            }
        },
        {
            id: 4,
            namaMotor: 'Motor RX King',
            tahunKeluaran: 2000,
            warna: 'Kuning',
            lokasi: {
                alamat: 'Jalan Cemara 321',
                kota: 'Blitar',
                kecamatan: 'Kanigoro',
                kodePos: '66171'
            },
            harga: {
                biaya: 15000000
            }
        }
    ]
};

function filterBerdasarkanKotanya(kota) {
    return data.motor.filter(motor => motor.lokasi.kota.includes(kota));
}

function filterBerdasarkanHarga(min_harga) {
    return data.motor.filter(motor => motor.harga.biaya > min_harga);
}

console.log(filterBerdasarkanKotanya('Blitar'));  
console.log(filterBerdasarkanHarga(10000000));  


//TODO 1 : dapatkan semua data
//TODO 2 : dapatkan data motor yang memiliki 'Blitar' dalam kotanya
//TODO 3 : dapatkan data dengan alamat Blitar
//TODO 4 : dapatkan data dengan motor dengan harga lebih dari 10.000.000
