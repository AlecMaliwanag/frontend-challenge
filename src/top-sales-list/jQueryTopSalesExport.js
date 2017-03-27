const React = require('react');
const TopSalesList = require('./top_sales.component.js');
var sampleData = require('../../data/db.json');

/*==================================Instructions=======================================*/
//Here is a jquery plugin than compiles the TopSalesList react component 
//1:  In order to use, run webpack.jquery.config.js in order to compile into es5
//2:  include react in your jquery app
//3:  include your new jquery plug in as a script tag ie: <script src ='./dist/TopSalesList/jqueryComponent.js'</script>
//4:  Call the plugin ie: 
        //$("#element").topSalesList({});
// for additonal references see the plugin boilerplate docs at : https://github.com/jquery-boilerplate/jquery-boilerplate

//Based off of boilerplate jquery plugin constructor

if (typeof jQuery !== 'undefined') {
    (function ($) {
        var pluginName = "topSalesList",
            defaults = {
                data: sampleData.PurchaseOrders
            };
 
        function Plugin(element, options) {
            this.element = element;
            this.settings = $.extend({}, defaults, options);
            this._defaults = defaults;
            this._name = pluginName;
            this.init();
        }
 
        $.extend(Plugin.prototype, {
            init: function () {
                this.component = React.render(
                    <TopSalesList purchaseOrders={this.settings.value} />,
                    this.element
                );
                return this;
            },
        });
    })(jQuery);
}

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[ pluginName ] = function( options ) {
      return this.each( function() {
        if ( !$.data( this, "plugin_" + pluginName ) ) {
          $.data( this, "plugin_" +
            pluginName, new Plugin( this, options ) );
        }
      } );
    };

} )( jQuery, window, document );
