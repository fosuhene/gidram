start transaction;


DROP view if exists tbl_view_organization_unit;
CREATE VIEW tbl_view_organization_unit AS
SELECT br.branch_id,br.parent_branch,br.church_id,br.location,ci.churchname,br.branchname,b.branchname  AS 'sub_branch',br.created_at
SELECT hn.name,hr.hierachyNationalID,hr.name
FROM hierachy_national hn
join hierachy_regional hr on hr.hierachyNationalID 	= hn.id
join hierachy_district hd on hd.hierachyRegionalID	= hr.hierachyNationalID
join hierachy_community hc on hc.hierachyDistrictID 	= hd.hierachyRegionalID
join hierachy_facility hf on hf.hierachyCommunityID 	= hc.hierachyDistrictID
 order by hn.id



DROP view if exists  tbl_view_tax_company;
CREATE VIEW  tbl_view_tax_company AS
SELECT  hf.*,tc.tax_company_name,tc.tax_company_desc,tc.tax_company_identifier,tc.added_date,lo.locationname,lo.locationID,lo.locationcode,lo.office_phone,lo.latitude as locationlatitude,lo.longitude as locationlongitude
FROM hierachy_facility hf
 join  tax_company tc on tc.tax_company_id 	=  hf.tax_company_id
 join  location lo on lo.locationID 	=  hf.location_id

 DROP view if exists  tbl_view_location;
CREATE VIEW  tbl_view_location AS
SELECT  hf.id,GROUP_CONCAT(hf.name) as name,GROUP_CONCAT(hf.shortname) as shortname,GROUP_CONCAT(hf.address) as address,GROUP_CONCAT(hf.email) as email,
GROUP_CONCAT(hf.phone) as phone,GROUP_CONCAT(hf.latitude) as latitude,
GROUP_CONCAT(hf.longitude) as longitude,GROUP_CONCAT(tc.tax_company_name) as tax_company_name,
GROUP_CONCAT(tc.tax_company_desc) as tax_company_desc,GROUP_CONCAT(tc.tax_company_identifier) as tax_company_identifier,
tc.added_date,lo.locationname,lo.locationID,lo.locationcode,lo.office_phone,lo.latitude as locationlatitude,lo.longitude as locationlongitude
FROM hierachy_facility hf
 join  tax_company tc on tc.tax_company_id 	=  hf.tax_company_id
 join  location lo on lo.locationID 	=  hf.location_id
 group by lo.locationname



DROP view if exists tbl_view_organization_units;
CREATE VIEW tbl_view_organization_units AS
SELECT hn.name,hr.hierachyNationalID,GROUP_CONCAT(hr.name) as regional,GROUP_CONCAT(hd.name) as district,GROUP_CONCAT(hc.name) as community,GROUP_CONCAT(hf.name) as facility
FROM hierachy_national hn
left join hierachy_regional hr on hr.hierachyNationalID 	=  hn.id
left join hierachy_district hd on hd.hierachyRegionalID	= hr.hierachyNationalID
left join hierachy_community hc on hc.hierachyDistrictID 	= hd.hierachyRegionalID
left join hierachy_facility hf on hf.hierachyCommunityID 	= hc.hierachyDistrictID
order by hr.hierachyNationalID


DROP view if exists tbl_view_totalvalues ;
CREATE VIEW tbl_view_totalvalues AS
SELECT YEAR(CURDATE())  AS year,
(select count(lo.locationID) from location lo) As location,
(select count(fc.id) from hierachy_facility fc) As facility,
(select count(ss.tax_company_id) from tax_company ss) As tax_company
-- (select count(ch.id) from church_groups ch) As group_no,


DROP view if exists tbl_view_levels ;
CREATE VIEW tbl_view_levels AS
SELECT
(select count(hn.id) from hierachy_national hn) As national,
(select count(hr.id) from hierachy_regional hr) As regional,
(select count(hd.id) from hierachy_district hd) As district,
(select count(hc.id) from hierachy_community hc) As community,
(select count(hf.id) from hierachy_facility hf) As facility,
(select count(lo.locationID) from location lo) As location



DROP view if exists tbl_view_organization_unit;
CREATE VIEW tbl_view_organization_unit AS
SELECT hr.hierachyNationalID, hc.hierachyDistrictID,hf.hierachyCommunityID,hr.name as regional,hd.name as district,hc.name as community,hf.name as facility
FROM  hierachy_regional hr
left join hierachy_district hd on hd.hierachyRegionalID	= hr.hierachyNationalID
left join hierachy_community hc on hc.hierachyDistrictID 	= hd.hierachyRegionalID
left join hierachy_facility hf on hf.hierachyCommunityID 	= hc.hierachyDistrictID


select id, name from hierachy_national  where id = 1 union all
select hn.id, hn.hierachyNationalID from hierachy_national hn join hierachy_regional
on hn.id = hr.hierachyNationalID

SELECT hn.*, hr.*
     FROM  hierachy_national AS hn
     LEFT JOIN hierachy_regional AS hr ON hr.hierachyNationalID 	=  hn.id
    WHERE hn.id = 1
      AND hr.hierachyNationalID > 1
UNION
   SELECT f.*, u.*
     FROM FRIENDS AS f
     JOIN USERS AS u ON u.uid = f.fid1
    WHERE f.fid2  = 1
      AND f.fid1 < 1


commit;
