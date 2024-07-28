const lirikLagu = [
    "She's been my queen",
    "Since we were sixteen",
    "We want the same things",
    "We dream the same dreams",
    "Alright,",
    "Alright"
  ];
  
  const kecepatanPerBaris = [50, 50, 50, 50, 50, 250];
  
  function cetakBaris(baris, jeda, selesai) {
    const hurufHuruf = baris.split('');
    hurufHuruf.forEach((huruf, indeks) => {
      setTimeout(() => {
        process.stdout.write(huruf);
        if (indeks === hurufHuruf.length - 1) {
          console.log();
          selesai();
        }
      }, jeda * indeks);
    });
  }
  
  function cetakSemuaBaris() {
    let waktuTotal = 0;
    lirikLagu.forEach((baris, indeks) => {
      setTimeout(() => {
        cetakBaris(baris, kecepatanPerBaris[indeks], () => {});
      }, waktuTotal);
      waktuTotal += kecepatanPerBaris[indeks] * baris.length + 500; 
    });
  }
  
  cetakSemuaBaris();
  