var motoGP = [
  {
    circuit: 'Losail',
    location: 'Qatar',
    winner: {
      firstName: 'Andrea',
      lastName: 'Dovizioso',
      country: 'Italy'
    }
  },
  {
    circuit: 'Autodromo',
    location: 'Argentine',
    winner: {
      firstName: 'Cal',
      lastName: 'Crutchlow',
      country: 'UK'
    }
  },
  {
    circuit: 'De Jerez',
    location: 'Spain',
    winner: {
      firstName: 'Valentino',
      lastName: 'Rossi',
      country: 'Italy'
    }
  },
  {
    circuit: 'Mugello',
    location: 'Italy',
    winner: {
      firstName: 'Andrea',
      lastName: 'Dovizioso',
      country: 'Italy'
    }
  }
];

function kelompokkanBerdasarkanNegara(data) {
  let hasil = {};

  data.forEach(function (item) {
    let negara = item.winner.country;
    let namaLengkap = item.winner.firstName + ' ' + item.winner.lastName;
    let lokasiMenang = item.circuit + ', ' + item.location;

    // Jika negara belum ada di dalam objek hasil, inisialisasi dulu
    if (!hasil[negara]) {
      hasil[negara] = {
        winningCircuits: [],
        totalWins: 0
      };
    }

    // Tambahkan data sirkuit yang dimenangkan ke dalam array
    hasil[negara].winningCircuits.push({
      name: namaLengkap,
      winLocation: lokasiMenang
    });

    // Tambah jumlah total kemenangan
    hasil[negara].totalWins++;
  });

  return hasil;
}

// Menampilkan output
console.log(JSON.stringify(kelompokkanBerdasarkanNegara(motoGP), null, 2));