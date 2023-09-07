import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

interface Registro {
  id: number;
  nombre: string;
  edad: number;
}

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss'],
})
export class TablaComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombre', 'edad'];
  dataSource = new MatTableDataSource<Registro>([]);

  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  ngOnInit() {
    const data: Registro[] = [
      { id: 1, nombre: 'Nombre1', edad: 25 },
      { id: 2, nombre: 'Nombre2', edad: 30 },
    ];

    this.dataSource = new MatTableDataSource(data);

    // Verificar si las referencias son válidas antes de asignarlas
    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement)?.value;
    this.dataSource.filter = filterValue?.trim().toLowerCase() || '';
  }
}
