const React = require('react');
const TopSalesList = require('./top_sales.component.js');

// function RenderTopSalesList = (selector) {
//   React.render(
//     <TopSalesList />
//   )
// }
// if (typeof jQuery !== 'undefined') {
//     (function ($) {
//         var pluginName = "topSalesList",
//             defaults = {
//                 value: 0
//             };
 
//         function Plugin(element, options) {
//             this.element = element;
//             this.settings = $.extend({}, defaults, options);
//             this._defaults = defaults;
//             this._name = pluginName;
//             this.init();
//         }
 
//         $.extend(Plugin.prototype, {
//             init: function () {
//                 this.component = React.render(
//                     <Counter value={this.settings.value} />,
//                     this.element
//                 );
//                 return this;
//             },
 
//             val: function (val) {
//                 if (!arguments.length) {
//                     return this.component.state.counter;
//                 }else{
//                     this.settings.value = val;
//                     this.init();
//                 }
//             }
//         });
//     })(jQuery);
// }

// // src/main.jsx
//         $.fn[pluginName] = function (options) {
//             return this.map(function () {
//                 if (!$.data(this, 'plugin_'+pluginName)) {
//                     $.data(this, 'plugin_'+pluginName, new Plugin(this, options));
//                 }
//                 return $.data(this, 'plugin_'+pluginName);
//             });
//         };
//     })(jQuery);