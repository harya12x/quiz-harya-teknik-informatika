import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keuangan',
  templateUrl: './keuangan.page.html',
  styleUrls: ['./keuangan.page.scss'],
})
export class KeuanganPage implements OnInit {
  public judul3 = [
    'No',
    'Tahun Akademik',
    'Semester',
    'Tanggal',
    'Jumlah',

  ];
  public isi3 = [
    {
      no: 1,
      tahun: '20xx',
      semester: 'Ganjil',
      tanggal: '00-00-00',
      jumlah: 200000,
      
    },
    { 
      no: 2,
      tahun: '20xx',
      semester: 'Ganjil',
      tanggal: '00-00-00',
      jumlah: 100000,
     
    },
    { 
      no: 3,
      tahun: '20xx',
      semester: 'Ganjil',
      tanggal: '00-00-00',
      jumlah: 150000,
      
    },
    { 
      no: 4,
      tahun: '20xx',
      semester: 'Genap',
      tanggal: '00-00-00',
      jumlah: 100000,
     
    },
    { 
      no: 5,
      tahun: '20xx',
      semester: 'Genap',
      tanggal: '00-00-00',
      jumlah: 200000,
      
    },
    {
      no: 6,
      tahun: '20xx',
      semester: 'Genap',
      tanggal: '00-00-00',
      jumlah: 300000,
      
    },
    { 
      no: 7,
      tahun: '20xx',
      semester: 'Ganjil',
      tanggal: '00-00-00',
      jumlah: 150000,
      
    }

  ];
  constructor() { }

  ngOnInit() {
  }

}
