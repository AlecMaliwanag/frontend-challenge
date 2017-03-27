const React = require('react');
const TopSalesList = require('./top_sales.component.js');
var sampleData = require('../../data/db.json');

// function RenderTopSalesList = (selector) {
//   React.render(
//     <TopSalesList />,
//     document.querySelectorAll(selector)[0] //first item in array
//   );
// }

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
