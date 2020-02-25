start transaction;

DROP view if exists tbl_view_daily_sales ;
CREATE VIEW tbl_view_daily_sales AS
SELECT id, SUM(total) AS total, saledate
FROM sale_summary
 WHERE DATE(saledate) = CURDATE()


DROP view if exists tbl_view_yesterday_sales ;
CREATE VIEW tbl_view_yesterday_sales AS
SELECT id, SUM(total)  AS yesti_sales, saledate
FROM sale_summary
WHERE DATE(saledate) = SUBDATE(CURDATE(),1)



DROP view if exists tbl_view_double_dropdown_list ;
CREATE VIEW  tbl_view_double_dropdown_list AS
SELECT pd.*,pi.product_name
FROM products_details pd
join purchase_item pi on pi.id = pd.purchase_id


DROP view if exists tbl_view_product_details ;
CREATE VIEW  tbl_view_product_details AS
SELECT pd.*, ca.name AS category, pi.product_name  AS product_name, sp.name AS supplier, pi.price AS purchasing_price, (pi.price * pd.quantity) As stock
FROM products_details pd
join purchase_item pi on pi.id = pd.purchase_id
join category ca on ca.id = pi.category_id
join supplier sp on sp.id = pi.supplier_id


DROP view if exists tbl_view_purchases_table ;
CREATE VIEW tbl_view_purchases_table AS
SELECT ps.id, MONTHNAME(ps.date) AS month, YEAR(ps.date)  AS year, SUM(ps.amount_received) AS received_total, SUM(pi.price * pi.quantity)  AS purchases_total, SUM(ps.amount_received - (pi.price * pi.quantity)) AS variance
FROM purchase_summary ps
join purchase_item pi on pi.purchase_summary_id = ps.id
group by month


DROP view if exists tbl_view_purchase_item_list ;
CREATE VIEW  tbl_view_purchase_item_list AS
SELECT pi.*, (pi.price * pi.quantity) AS total, ca.name  AS category, ss.name AS supplier, ps.received_by AS  received_by , ps.amount_received AS amount_received
FROM purchase_item pi
join category ca on ca.id = pi.category_id
join supplier ss on ss.id = pi.supplier_id
join purchase_summary ps on ps.id = pi.purchase_summary_id


DROP view if exists tbl_view_sale_list ;
CREATE VIEW  tbl_view_sale_list AS
SELECT pi.product_name,pd.selling_price,do.quantity,(pd.selling_price * do.quantity) AS  sub_total,do.sale_id,do.product_id,ss.total,ss.cash,ss.balance
FROM products_details pd
join purchase_item pi on pi.id = pd.purchase_id
join double_sale do on do.product_id = pd.id
join sale_summary ss on ss.id = do.sale_id
group by do.sale_id

commit;