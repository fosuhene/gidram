<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

require_once dirname(__FILE__) . '/tcpdf/tcpdf.php';

/**
 * Pdf library for CI using TCPDF.
 *
 * @author Virendra Jadeja
 */
class Pdf extends TCPDF {

    protected $_ci;

    /**
     * Pdf class constructor
     *

     */
 public   function __construct() {
        $this->_ci = & get_instance();
    }


}




