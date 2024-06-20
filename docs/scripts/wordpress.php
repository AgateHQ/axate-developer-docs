// Various functions used in wordpress instances of implementation of Axate, including with memberful plugin

add_action( 'rest_api_init', 'add_custom_fields' );
function add_custom_fields() {
register_rest_field(
'post', 
'axate', //New Field Name in JSON RESPONSEs
array(
    'get_callback'    => 'get_custom_fields', // custom function name 
    'update_callback' => null,
    'schema'          => null,
     )
);
}

function get_custom_fields( $object, $field_name, $request ) {
// 	$theContent = get_the_content($object->ID);
	ob_start();
	remove_filter( 'the_content', 'memberful_wp_protect_content', -10 );
	the_content();
	
	$the_content = ob_get_contents();
	ob_end_clean();
	return $the_content;
}
?>

function add_content_after($content) {
    if (has_tag('premium')) {
        $content = '<div class="premium">' . $content . '</div><div class="axate-notice"></div>';
    }
    return $content;
}
add_filter('the_content', 'add_content_after');

function add_axate() {
    echo '<script async src="https://wallet-staging.axate.io/bundle.js"></script>';
    echo '<div id="axate-wallet" data-selector-premium-content=".premium" data-selector-article-content=".article" data-selector-in-page-notice=".axate-notice"></div>';
}
add_action('wp_head', 'add_axate');
