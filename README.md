```text
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│                                          cars                                            │
├─────────────┬─────────────────────────┬──────────────────────────────────────────────────┤
│id           │serial                   │primary key                                       │
│owner        │varchar(255)             │not null default ''                               │
│year         │varchar(255)             │not null default ''                               │
│make         │varchar(255)             │not null default ''                               │
│model        │varchar(255)             │not null default ''                               │
│VIN          │varchar(255)             │not null default ''                               │
│created_at   │timestamp with time zone │not null default now()                            │
│updated_at   │timestamp with time zone │not null default now()                            │
└─────────────┴─────────────────────────┴──────────────────────────────────────────────────┘
```

```text
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│                                         parts                                            │
├─────────────┬─────────────────────────┬──────────────────────────────────────────────────┤
│id           │serial                   │primary key                                       │
│car_id       │integer                  │not null default '' foreign key references cars   │
│part_num     │varchar(255)             │not null default ''                               │
│description  │text                     │not null default ''                               │
│location     │char(5)                  │not null default ''                               │
│created_at   │timestamp with time zone │not null default now()                            │
│updated_at   │timestamp with time zone │not null default now()                            │
└─────────────┴─────────────────────────┴──────────────────────────────────────────────────┘
```
Req Method | Req URL   | Req Body |   Res Status |            Res Body
|----------|-----------|----------|--------------|----------------------------------|
   `GET`     `/cars`       N/A          `200`     `[{id:1, owner:Rally Jinx, ...}]`
   `GET`     `/cars/1`     N/A          `200`     `{id:1, owner:Rally Jinx...}`
   `POST`    `/cars`   `{owner:...}`    `200`     `{id:2, owner:...}`
   `PATCH`   `/cars/2` `{year:1979}`    `200`     `{id:2, ... year:1979...}`
   `DELETE`  `/cars/2`     N/A          `200`     `{id:2, owner:...}`

   `GET`     `/parts`      N/A          `200`     `[{id:1, car_id:1, part_num...}]`
   `GET`     `/parts/1`    N/A          `200`     `{id:1, car_id:1, part_num...}`
   `POST`    `/parts`   `{car_id:...}`  `200`     `{id:2, car_id:1, part_num...}`
   `PATCH`   `/parts/2` `{location:...}``200`     `{id:2, car_id:1, part_num...}`
   `DELETE`  `/parts/2`    N/A          `200`     `{id:2, car_id:1, part_num...}`    
