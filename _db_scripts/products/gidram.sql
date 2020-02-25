-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 18, 2020 at 11:23 AM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gidram`
--

-- --------------------------------------------------------

--
-- Stand-in structure for view `vwtransactionlines`
-- (See below for the actual view)
--
CREATE TABLE `vwtransactionlines` (
`FacilityID` int(11)
,`FacilityTIN` int(11)
,`FacilityName` varchar(100)
,`TLID` int(11)
,`TL_Entry` datetime
,`TLQuantity` int(11)
,`TLUPrice` decimal(19,2)
,`TLFacilityID` int(11)
,`TL_Total` decimal(10,4)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `vw_facility_tax`
-- (See below for the actual view)
--
CREATE TABLE `vw_facility_tax` (
`FacilityID` int(11)
,`FCID` int(11)
,`FCTaxID` int(11)
,`FacilityName` varchar(100)
,`TaxCompanyTypeID` int(11)
,`TaxCompanyTypeName` varchar(255)
,`TaxCompanyTypeDesc` text
,`TaxCompanyTypeIdentifier` varchar(255)
,`FC_CommunityID` int(11)
,`FC_CommunityName` varchar(100)
,`TCS_ID` int(11)
,`TC_ID` int(11)
,`TaxComponentID` int(11)
,`TaxComponentName` varchar(255)
,`TaxComponentStartDate` date
,`TaxComponentEndDate` date
,`TaxComponentDesc` text
,`TaxComponentFactor` varchar(10)
,`TaxComponentGrade` varchar(20)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `vw_facility_tax_community`
-- (See below for the actual view)
--
CREATE TABLE `vw_facility_tax_community` (
`FacilityID` int(11)
,`FCID` int(11)
,`FCTaxID` int(11)
,`FacilityName` varchar(100)
,`TaxCompanyTypeID` int(11)
,`TaxCompanyTypeName` varchar(255)
,`TaxCompanyTypeDesc` text
,`TaxCompanyTypeIdentifier` varchar(255)
,`FC_CommunityID` int(11)
,`FC_CommunityName` varchar(100)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `vw_taxcompany_setups`
-- (See below for the actual view)
--
CREATE TABLE `vw_taxcompany_setups` (
`TCS_ID` int(11)
,`TCS_TaxCompanyID` int(11)
,`TCS_TaxComponentID` int(11)
,`TCS_PreferenceCode` varchar(50)
,`TC_ID` int(11)
,`TC_Name` varchar(255)
,`TC_Desc` text
,`TC_Identifier` varchar(255)
,`TC_AddedDate` timestamp
,`TaxComponentID` int(11)
,`TaxComponentName` varchar(255)
,`TaxComponentStartDate` date
,`TaxComponentEndDate` date
,`TaxComponentDesc` text
,`TaxComponentFactor` varchar(10)
,`TaxComponentGrade` varchar(20)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `vw_transactionlines_tax`
-- (See below for the actual view)
--
CREATE TABLE `vw_transactionlines_tax` (
`FacilityID` int(11)
,`FCID` int(11)
,`FCTaxID` int(11)
,`FacilityName` varchar(100)
,`TaxCompanyTypeID` int(11)
,`TaxCompanyTypeName` varchar(255)
,`TaxCompanyTypeDesc` text
,`TaxCompanyTypeIdentifier` varchar(255)
,`FC_CommunityID` int(11)
,`FC_CommunityName` varchar(100)
,`TCS_ID` int(11)
,`TC_ID` int(11)
,`TaxComponentID` int(11)
,`TaxComponentName` varchar(255)
,`TaxComponentStartDate` date
,`TaxComponentEndDate` date
,`TaxComponentDesc` text
,`TaxComponentFactor` varchar(10)
,`TaxComponentGrade` varchar(20)
,`FacilityTIN` int(11)
,`TLID` int(11)
,`TL_Entry` datetime
,`TLQuantity` int(11)
,`TLUPrice` decimal(19,2)
,`TLFacilityID` int(11)
,`TL_Total` decimal(10,4)
);

-- --------------------------------------------------------

--
-- Structure for view `vwtransactionlines`
--
DROP TABLE IF EXISTS `vwtransactionlines`;

CREATE VIEW `vwtransactionlines`  AS  select `hf`.`id` AS `FacilityID`,`hf`.`tin` AS `FacilityTIN`,`hf`.`name` AS `FacilityName`,`tl`.`id` AS `TLID`,`tl`.`entry_date` AS `TL_Entry`,`tl`.`qty` AS `TLQuantity`,`tl`.`unitPrice` AS `TLUPrice`,`tl`.`facilityId` AS `TLFacilityID`,`tl`.`calc_total` AS `TL_Total` from (`hierachy_facility` `hf` join `transaction_lines` `tl`) where (`tl`.`facilityId` = `hf`.`id`) order by `hf`.`name` ;

-- --------------------------------------------------------

--
-- Structure for view `vw_facility_tax`
--
DROP TABLE IF EXISTS `vw_facility_tax`;

CREATE VIEW `vw_facility_tax`  AS  select `vftc`.`FacilityID` AS `FacilityID`,`vftc`.`FCID` AS `FCID`,`vftc`.`FCTaxID` AS `FCTaxID`,`vftc`.`FacilityName` AS `FacilityName`,`vftc`.`TaxCompanyTypeID` AS `TaxCompanyTypeID`,`vftc`.`TaxCompanyTypeName` AS `TaxCompanyTypeName`,`vftc`.`TaxCompanyTypeDesc` AS `TaxCompanyTypeDesc`,`vftc`.`TaxCompanyTypeIdentifier` AS `TaxCompanyTypeIdentifier`,`vftc`.`FC_CommunityID` AS `FC_CommunityID`,`vftc`.`FC_CommunityName` AS `FC_CommunityName`,`tcs`.`TCS_ID` AS `TCS_ID`,`tcs`.`TC_ID` AS `TC_ID`,`tcs`.`TaxComponentID` AS `TaxComponentID`,`tcs`.`TaxComponentName` AS `TaxComponentName`,`tcs`.`TaxComponentStartDate` AS `TaxComponentStartDate`,`tcs`.`TaxComponentEndDate` AS `TaxComponentEndDate`,`tcs`.`TaxComponentDesc` AS `TaxComponentDesc`,`tcs`.`TaxComponentFactor` AS `TaxComponentFactor`,`tcs`.`TaxComponentGrade` AS `TaxComponentGrade` from (`vw_facility_tax_community` `vftc` join `vw_taxcompany_setups` `tcs`) where (`vftc`.`TaxCompanyTypeID` = `tcs`.`TC_ID`) ;

-- --------------------------------------------------------

--
-- Structure for view `vw_facility_tax_community`
--
DROP TABLE IF EXISTS `vw_facility_tax_community`;

CREATE VIEW `vw_facility_tax_community`  AS  select `hf`.`id` AS `FacilityID`,`hf`.`hierachyCommunityID` AS `FCID`,`hf`.`tax_company_id` AS `FCTaxID`,`hf`.`name` AS `FacilityName`,`tc`.`tax_company_id` AS `TaxCompanyTypeID`,`tc`.`tax_company_name` AS `TaxCompanyTypeName`,`tc`.`tax_company_desc` AS `TaxCompanyTypeDesc`,`tc`.`tax_company_identifier` AS `TaxCompanyTypeIdentifier`,`hc`.`id` AS `FC_CommunityID`,`hc`.`name` AS `FC_CommunityName` from ((`hierachy_facility` `hf` join `tax_company` `tc`) join `hierachy_community` `hc`) where ((`hf`.`tax_company_id` = `tc`.`tax_company_id`) and (`hf`.`hierachyCommunityID` = `hc`.`id`)) ;

-- --------------------------------------------------------

--
-- Structure for view `vw_taxcompany_setups`
--
DROP TABLE IF EXISTS `vw_taxcompany_setups`;

CREATE VIEW `vw_taxcompany_setups`  AS  select `tcs`.`tax_company_setup_id` AS `TCS_ID`,`tcs`.`taxCompany_id` AS `TCS_TaxCompanyID`,`tcs`.`taxComponent_id` AS `TCS_TaxComponentID`,`tcs`.`preferenceCode` AS `TCS_PreferenceCode`,`tc`.`tax_company_id` AS `TC_ID`,`tc`.`tax_company_name` AS `TC_Name`,`tc`.`tax_company_desc` AS `TC_Desc`,`tc`.`tax_company_identifier` AS `TC_Identifier`,`tc`.`added_date` AS `TC_AddedDate`,`tx`.`tax_id` AS `TaxComponentID`,`tx`.`tax_name` AS `TaxComponentName`,`tx`.`tax_startdate` AS `TaxComponentStartDate`,`tx`.`tax_enddate` AS `TaxComponentEndDate`,`tx`.`tax_desc` AS `TaxComponentDesc`,`tx`.`tax_factor` AS `TaxComponentFactor`,`tx`.`tax_grade` AS `TaxComponentGrade` from ((`tax_company_setup` `tcs` join `tax_company` `tc`) join `tax_table` `tx`) where ((`tcs`.`taxCompany_id` = `tc`.`tax_company_id`) and (`tcs`.`taxComponent_id` = `tx`.`tax_id`)) ;

-- --------------------------------------------------------

--
-- Structure for view `vw_transactionlines_tax`
--
DROP TABLE IF EXISTS `vw_transactionlines_tax`;

CREATE VIEW `vw_transactionlines_tax`  AS  select `vft`.`FacilityID` AS `FacilityID`,`vft`.`FCID` AS `FCID`,`vft`.`FCTaxID` AS `FCTaxID`,`vft`.`FacilityName` AS `FacilityName`,`vft`.`TaxCompanyTypeID` AS `TaxCompanyTypeID`,`vft`.`TaxCompanyTypeName` AS `TaxCompanyTypeName`,`vft`.`TaxCompanyTypeDesc` AS `TaxCompanyTypeDesc`,`vft`.`TaxCompanyTypeIdentifier` AS `TaxCompanyTypeIdentifier`,`vft`.`FC_CommunityID` AS `FC_CommunityID`,`vft`.`FC_CommunityName` AS `FC_CommunityName`,`vft`.`TCS_ID` AS `TCS_ID`,`vft`.`TC_ID` AS `TC_ID`,`vft`.`TaxComponentID` AS `TaxComponentID`,`vft`.`TaxComponentName` AS `TaxComponentName`,`vft`.`TaxComponentStartDate` AS `TaxComponentStartDate`,`vft`.`TaxComponentEndDate` AS `TaxComponentEndDate`,`vft`.`TaxComponentDesc` AS `TaxComponentDesc`,`vft`.`TaxComponentFactor` AS `TaxComponentFactor`,`vft`.`TaxComponentGrade` AS `TaxComponentGrade`,`vtl`.`FacilityTIN` AS `FacilityTIN`,`vtl`.`TLID` AS `TLID`,`vtl`.`TL_Entry` AS `TL_Entry`,`vtl`.`TLQuantity` AS `TLQuantity`,`vtl`.`TLUPrice` AS `TLUPrice`,`vtl`.`TLFacilityID` AS `TLFacilityID`,`vtl`.`TL_Total` AS `TL_Total` from (`vw_facility_tax` `vft` join `vwtransactionlines` `vtl`) where (`vft`.`FacilityID` = `vtl`.`TLFacilityID`) ;



COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
