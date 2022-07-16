/*
            Program Menghitung Luas dan Keliling Lingkaran
            input   : jari-jari    
            proses  : 1. Menghitung Luas
                      2. Menghitung Keliling
            output  : 1. Menampilkan Luas
                      2. Menampilkan Keliling
        */
        
        // variabel global
        let jari_jari = 5; // hanya data testing
        const phi = 3.14;

        // membuat fungsi hitungLuas
        function hitungLuas(){
            // variabel lokal
            let jari_jari = document.getElementById('jari_jari').value;

            let hasil = phi * jari_jari * jari_jari;

            document.getElementById('hasil').innerHTML = hasil;

            // bisa kaya gini
            // document.getElementById('hasil').innerHTML = phi * document.getElementById('jari_jari').value * document.getElementById('jari_jari').value;
        }

        // membuat fungsi hitungKeliling
        function hitungKeliling(){
            let jari_jari = document.getElementById('jari_jari').value;
            
            let hasil = 2 * phi * jari_jari;
            
            document.getElementById('hasil').innerHTML = hasil;
        }
        
        // membuat fungsi hitung
        function hitung(){
            let jari_jari = document.getElementById('jari_jari').value;
            let mode = document.querySelector('#jenis_hitung').value;
            let hasil = null;

            if(jari_jari == ''){
                alert('Jari - jari wajib diisi');
            }
            else if(mode == ''){
                alert('Jenis Hitung wajib diisi');
            }
            else{
                if(mode == 'keliling'){
                    hasil = 'Keliling = ' + 2 * phi * jari_jari;
                }else{
                    hasil = 'Luas = ' + phi * jari_jari * jari_jari;
                }
                document.getElementById('hasil').innerHTML = hasil;
            }
        }

        // deklarasi variabel
        // const phi; let jari_jari;
        
        // assignment nilai ke variabel
        // phi = 3.14; jari_jari = 14;

        // deklarasi variabel dan pemberian nilai ke variabel
        // const phi = 3.14;   // variabel phi bernilai 3.14 dengan tipe data float / double
        // let jari_jari = 14; // variabel jari_jari bernilai 14 dengan tipe data integer
        // let luas = null;    
        // let keliling = null;

        // // rumus luas lingkaran: phi * r * r
        // luas = phi * jari_jari * jari_jari;

        // // rumus keliling lingkaran: 2 * phi * r
        // keliling = 2 * phi * jari_jari;
        // console.log('luas: '+luas);
        // console.log('keliling: '+keliling);