<?php

    class Website{
        public $url = "";
        public $title = "";    
    };

    class WebsiteFactory{
        
        private $url = "";    
        private $xpathContent = null;
        
        public function __construct($url) {
            $this->url = $url;
        }
        
        public function loadContent(){
            $doc = new DOMDocument();
            $doc->loadHTMLFile($this->url);
            $this->xpathContent = new DOMXPath($doc);
        }    
        
        private function getDomain(){
            $domain = parse_url($this->url)['host'];    
            return $domain;
        }
        
        private function getTitle(){
            $title = $this->xpathContent->query('//title')->item(0)->nodeValue."\n";
            $title = mb_convert_encoding($title,'HTML-ENTITIES','utf-8');
            return $title;
        }
            
        public function makeWebsite(){
            $website = new Website();
            $this->loadContent();
            $website->url = $this->url;
            $website->title = $this->getTitle();
            $website->author = $this->getDomain();
            return $website;
        }
    }    
    
    $url = $_GET['url'];
    $websiteFactory = new WebsiteFactory($url);
    $website = $websiteFactory->makeWebsite();
    echo json_encode($website);
?>