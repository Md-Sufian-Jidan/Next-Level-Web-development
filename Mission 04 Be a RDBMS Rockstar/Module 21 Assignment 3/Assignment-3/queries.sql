-- Query-1
select
  booking_id,
  u.user_name,
  v.vehicle_name,
  start_date,
  end_date,
  booking_status
from
  bookings as b
  inner join users as u on u.user_id = b.user_id
  inner join vehicles as v on v.vehicle_id = b.vehicle_id;

-- Query-2
select
  *
from
  vehicles as v
where
  not exists (
    select
      *
    from
      bookings as b
    where
      b.vehicle_id = v.vehicle_id
  );

-- Query-3
select
  *
from
  vehicles
where
  vehicle_type = 'car'
  and status = 'available';

-- Query-4
select
  v.vehicle_id,
  v.vehicle_name,
  count(*) as total_bookings
from
  bookings as b
  inner join vehicles as v on v.vehicle_id = b.vehicle_id
group by
  v.vehicle_id,
  v.vehicle_name
having
  count(*) > 2;
