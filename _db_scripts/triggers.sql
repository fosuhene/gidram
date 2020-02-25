set foreign_key_checks = 0;
start transaction;

delimiter //

drop trigger if exists `tg_reduce_qty`//
create trigger `tg_reduce_qty` after insert on `double_sale` for each row
begin

	update `products_details`
		set `quantity` = (`quantity` - new.quantity)
		where id = new.product_id;

end //

delimiter ;
set foreign_key_checks = 1;

commit;