# Arsip database lama

Berkas di folder ini adalah dump PostgreSQL dari versi awal situs ALTEK UNSOED
(masih memakai Prisma dan database). Situs sekarang **tidak memakai database**:
semua data berasal dari `data/*.ts` melalui fungsi getter.

| Berkas | Keterangan |
| --- | --- |
| `altek_db.sql` | Dump database lama (tabel Concentration, Division, Member, Module). |
| `altek_backup.sql` | Salinan dump yang sama (hanya beda token otomatis `pg_dump`). |

Berkas ini hanya arsip. Mengubahnya tidak mengubah apa pun di situs.

## Data terbaru

Untuk data yang selaras dengan situs (anggota 2026 dan arsip 2025, mata kuliah,
modul, dan informasi), jalankan dari akar proyek:

```
bun run scripts/ekspor-sql.ts
```

Hasilnya `arsip/altek_data_2026.sql` (skema PostgreSQL `altek`). Berkas itu
dihasilkan otomatis dan tidak perlu diedit manual: ubah `data/*.ts`, lalu
jalankan ulang skripnya.
