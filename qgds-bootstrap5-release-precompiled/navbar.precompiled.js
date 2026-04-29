var Handlebars = require("handlebars");  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['navbar.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    return " dark";
},"3":function(container,depth0,helpers,partials,data) {
    return " vertical";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"navbarBrandName") : stack1), depth0));
},"7":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"navigationItems") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.program(59, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":14,"column":24},"end":{"line":76,"column":31}}})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <li class=\"nav-item dropdown"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"alternativeColor") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":56},"end":{"line":15,"column":91}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"mobileOnly") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":91},"end":{"line":15,"column":128}}})) != null ? stack1 : "")
    + "\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isExpandedOnMobile") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":129},"end":{"line":15,"column":196}}})) != null ? stack1 : "")
    + ">\n                                <a class=\"nav-link"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,((stack1 = (depths[1] != null ? lookupProperty(depths[1],"metadata") : depths[1])) != null ? lookupProperty(stack1,"verticalOrientation") : stack1),{"name":"unless","hash":{},"fn":container.program(15, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":50},"end":{"line":16,"column":120}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"currentPage") : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":120},"end":{"line":16,"column":153}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"dropdownOptions") : depth0)) != null ? lookupProperty(stack1,"hasNoLink") : stack1),{"name":"if","hash":{},"fn":container.program(19, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":153},"end":{"line":16,"column":203}}})) != null ? stack1 : "")
    + "\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"currentPage") : depth0),{"name":"if","hash":{},"fn":container.program(21, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":205},"end":{"line":16,"column":250}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"dropdownOptions") : depth0)) != null ? lookupProperty(stack1,"hasNoLink") : stack1),{"name":"if","hash":{},"fn":container.program(23, data, 0, blockParams, depths),"inverse":container.program(25, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":16,"column":250},"end":{"line":16,"column":322}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"target") : depth0),{"name":"if","hash":{},"fn":container.program(27, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":322},"end":{"line":16,"column":363}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"target") : depth0),"==","_blank",{"name":"ifCond","hash":{},"fn":container.program(29, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":363},"end":{"line":16,"column":432}}})) != null ? stack1 : "")
    + " role=\"button\" data-bs-toggle=\"dropdown\"\n                            aria-expanded=\"false\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"iconName") : depth0),{"name":"if","hash":{},"fn":container.program(31, data, 0, blockParams, depths),"inverse":container.program(36, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":18,"column":32},"end":{"line":27,"column":39}}})) != null ? stack1 : "")
    + "                                </a>\n                                <button class=\"nav-link dropdown-toggle\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"currentPage") : depth0),{"name":"if","hash":{},"fn":container.program(38, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":72},"end":{"line":29,"column":118}}})) != null ? stack1 : "")
    + "  data-bs-toggle=\"dropdown\" data-bs-auto-close=\"false\" aria-expanded=\"false\" aria-selected=\"false\" aria-label=\"Toggle navigation\">                                \n                                    <span class=\"visually-hidden\">Expand</span>\n                                </button>\n                                <ul class=\"dropdown-menu\">\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"dropdownOptions") : depth0)) != null ? lookupProperty(stack1,"hasNoLink") : stack1),{"name":"unless","hash":{},"fn":container.program(40, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":36},"end":{"line":40,"column":47}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"navigationItems") : depth0),{"name":"each","hash":{},"fn":container.program(47, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":41,"column":36},"end":{"line":53,"column":45}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"dropdownOptions") : depth0)) != null ? lookupProperty(stack1,"viewAllHref") : stack1),{"name":"if","hash":{},"fn":container.program(57, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":54,"column":36},"end":{"line":58,"column":43}}})) != null ? stack1 : "")
    + "                                </ul>\n                            </li>\n";
},"9":function(container,depth0,helpers,partials,data) {
    return " alt";
},"11":function(container,depth0,helpers,partials,data) {
    return " mobile-only";
},"13":function(container,depth0,helpers,partials,data) {
    return " data-is-expanded-on-mobile=\"true\"";
},"15":function(container,depth0,helpers,partials,data) {
    return " dropdown-toggle";
},"17":function(container,depth0,helpers,partials,data) {
    return " active";
},"19":function(container,depth0,helpers,partials,data) {
    return " hasNoLink";
},"21":function(container,depth0,helpers,partials,data) {
    return "aria-current=\"page\"";
},"23":function(container,depth0,helpers,partials,data) {
    return " href=\"#\"";
},"25":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " href=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"url","hash":{},"data":data,"loc":{"start":{"line":16,"column":307},"end":{"line":16,"column":314}}}) : helper)))
    + "\"";
},"27":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " target=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"target") || (depth0 != null ? lookupProperty(depth0,"target") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"target","hash":{},"data":data,"loc":{"start":{"line":16,"column":345},"end":{"line":16,"column":355}}}) : helper)))
    + "\"";
},"29":function(container,depth0,helpers,partials,data) {
    return " rel=\"noopener noreferrer\"";
},"31":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                    <span class=\"qld-icon qld-icon-md "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"iconName") || (depth0 != null ? lookupProperty(depth0,"iconName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"iconName","hash":{},"data":data,"loc":{"start":{"line":19,"column":70},"end":{"line":19,"column":82}}}) : helper)))
    + "\" aria-hidden=\"true\"></span>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"hideLabel") : depth0),{"name":"if","hash":{},"fn":container.program(32, data, 0),"inverse":container.program(34, data, 0),"data":data,"loc":{"start":{"line":20,"column":36},"end":{"line":24,"column":43}}})) != null ? stack1 : "");
},"32":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                        <span class=\"visually-hidden-lg\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"text","hash":{},"data":data,"loc":{"start":{"line":21,"column":73},"end":{"line":21,"column":81}}}) : helper)))
    + "</span>\n";
},"34":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                        "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"text","hash":{},"data":data,"loc":{"start":{"line":23,"column":40},"end":{"line":23,"column":48}}}) : helper)))
    + "\n";
},"36":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                    "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"text","hash":{},"data":data,"loc":{"start":{"line":26,"column":36},"end":{"line":26,"column":44}}}) : helper)))
    + "\n";
},"38":function(container,depth0,helpers,partials,data) {
    return " aria-current=\"page\"";
},"40":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                        <li>\n                                            <a class=\"dropdown-item parent-link\" href=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":35,"column":87},"end":{"line":35,"column":94}}}) : helper)))
    + "\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"currentPage") : depth0),{"name":"if","hash":{},"fn":container.program(38, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":35,"column":96},"end":{"line":35,"column":142}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"target") : depth0),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":35,"column":142},"end":{"line":35,"column":183}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"target") : depth0),"==","_blank",{"name":"ifCond","hash":{},"fn":container.program(29, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":35,"column":183},"end":{"line":35,"column":252}}})) != null ? stack1 : "")
    + ">"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"dropdownOptions") : depth0)) != null ? lookupProperty(stack1,"alternativeText") : stack1),{"name":"if","hash":{},"fn":container.program(41, data, 0),"inverse":container.program(43, data, 0),"data":data,"loc":{"start":{"line":35,"column":253},"end":{"line":35,"column":350}}})) != null ? stack1 : "")
    + "</a>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"dropdownOptions") : depth0)) != null ? lookupProperty(stack1,"description") : stack1),{"name":"if","hash":{},"fn":container.program(45, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":36,"column":44},"end":{"line":38,"column":51}}})) != null ? stack1 : "")
    + "                                        </li>\n";
},"41":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"dropdownOptions") : depth0)) != null ? lookupProperty(stack1,"alternativeText") : stack1), depth0));
},"43":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"text","hash":{},"data":data,"loc":{"start":{"line":35,"column":335},"end":{"line":35,"column":343}}}) : helper)));
},"45":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                                <p>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"dropdownOptions") : depth0)) != null ? lookupProperty(stack1,"description") : stack1), depth0))
    + "</p>\n";
},"47":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                        <li"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"mobileOnly") : depth0),{"name":"if","hash":{},"fn":container.program(48, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":42,"column":43},"end":{"line":42,"column":88}}})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isHTML") : depth0),{"name":"if","hash":{},"fn":container.program(50, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":43,"column":44},"end":{"line":45,"column":51}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"isHTML") : depth0),{"name":"unless","hash":{},"fn":container.program(52, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":46,"column":44},"end":{"line":51,"column":55}}})) != null ? stack1 : "")
    + "                                        </li>\n";
},"48":function(container,depth0,helpers,partials,data) {
    return " class=\"mobile-only\"";
},"50":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                                "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"htmlContent") || (depth0 != null ? lookupProperty(depth0,"htmlContent") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"htmlContent","hash":{},"data":data,"loc":{"start":{"line":44,"column":48},"end":{"line":44,"column":65}}}) : helper))) != null ? stack1 : "")
    + "\n";
},"52":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                                <a class=\"dropdown-item\" href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":47,"column":79},"end":{"line":47,"column":86}}}) : helper)))
    + "\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"target") : depth0),{"name":"if","hash":{},"fn":container.program(53, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":87},"end":{"line":47,"column":175}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"target") : depth0),"==","_blank",{"name":"ifCond","hash":{},"fn":container.program(29, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":175},"end":{"line":47,"column":244}}})) != null ? stack1 : "")
    + ">"
    + alias4(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":47,"column":245},"end":{"line":47,"column":253}}}) : helper)))
    + "</a>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"description") : depth0),{"name":"if","hash":{},"fn":container.program(55, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":48,"column":48},"end":{"line":50,"column":55}}})) != null ? stack1 : "");
},"53":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"currentPage") : depth0),{"name":"if","hash":{},"fn":container.program(38, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":102},"end":{"line":47,"column":148}}})) != null ? stack1 : "")
    + " target=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"target") || (depth0 != null ? lookupProperty(depth0,"target") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"target","hash":{},"data":data,"loc":{"start":{"line":47,"column":157},"end":{"line":47,"column":167}}}) : helper)))
    + "\"";
},"55":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                                    <p>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"description","hash":{},"data":data,"loc":{"start":{"line":49,"column":55},"end":{"line":49,"column":70}}}) : helper)))
    + "</p>\n";
},"57":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                        <li>\n                                            <a class=\"dropdown-item view-all\" "
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"currentPage") : depth0),{"name":"if","hash":{},"fn":container.program(38, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":56,"column":78},"end":{"line":56,"column":124}}})) != null ? stack1 : "")
    + " href=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"dropdownOptions") : depth0)) != null ? lookupProperty(stack1,"viewAllHref") : stack1), depth0))
    + "\">View all</a>\n                                        </li>\n";
},"59":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <li class=\"nav-item"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"alternativeColor") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":62,"column":47},"end":{"line":62,"column":82}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"mobileOnly") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":62,"column":82},"end":{"line":62,"column":119}}})) != null ? stack1 : "")
    + "\">\n                                <a class=\"nav-link"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"currentPage") : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":63,"column":50},"end":{"line":63,"column":83}}})) != null ? stack1 : "")
    + "\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"currentPage") : depth0),{"name":"if","hash":{},"fn":container.program(38, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":63,"column":84},"end":{"line":63,"column":130}}})) != null ? stack1 : "")
    + " href=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":63,"column":137},"end":{"line":63,"column":144}}}) : helper)))
    + "\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"target") : depth0),{"name":"if","hash":{},"fn":container.program(60, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":63,"column":145},"end":{"line":63,"column":187}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"target") : depth0),"==","_blank",{"name":"ifCond","hash":{},"fn":container.program(29, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":63,"column":187},"end":{"line":63,"column":256}}})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"iconName") : depth0),{"name":"if","hash":{},"fn":container.program(31, data, 0),"inverse":container.program(36, data, 0),"data":data,"loc":{"start":{"line":64,"column":32},"end":{"line":73,"column":39}}})) != null ? stack1 : "")
    + "                                </a>\n                            </li>\n";
},"60":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  target=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"target") || (depth0 != null ? lookupProperty(depth0,"target") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"target","hash":{},"data":data,"loc":{"start":{"line":63,"column":169},"end":{"line":63,"column":179}}}) : helper)))
    + "\"";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!-- QGDS Partial: Primary navigation -->\n\n<nav id=\"main-nav\" class=\"navbar navbar-expand-lg"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"alternativeColor") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":49},"end":{"line":3,"column":94}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"verticalOrientation") : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":94},"end":{"line":3,"column":146}}})) != null ? stack1 : "")
    + "\" aria-label=\"Website navigation\" role=\"navigation\">\n    <div id=\"navbarNav\" class=\"container\">\n            <div class=\"nav-header\">\n                <span class=\"navbar-brand\" href=\"#\">"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"navbarBrandName") : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":52},"end":{"line":6,"column":119}}})) != null ? stack1 : "")
    + "</span>\n                <button id=\"burgerCloseBtn\" type=\"button\" class=\"navbar-btn\" data-bs-toggle=\"collapse\"\n                    aria-label=\"Close\" data-bs-target=\"#main-nav\" aria-expanded=\"false\"\n                    aria-controls=\"collapseExample\">Close</button>\n            </div>\n            <div class=\"navbar-collapse\">\n                <ul class=\"navbar-nav\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"navigation") : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":20},"end":{"line":77,"column":29}}})) != null ? stack1 : "")
    + "                </ul>\n            </div>\n        </div>\n        <div id=\"overlay\"></div>\n</nav>";
},"useData":true,"useDepths":true});
