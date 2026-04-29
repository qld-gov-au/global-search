var Handlebars = require("handlebars");  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['header.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "dark";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"preHeader") : depth0)) != null ? lookupProperty(stack1,"palette") : stack1),"===","default",{"name":"ifCond","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":2,"column":92},"end":{"line":4,"column":55}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    return "default";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"preHeader") : depth0)) != null ? lookupProperty(stack1,"palette") : stack1),"===","dark-alt",{"name":"ifCond","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":3,"column":59},"end":{"line":4,"column":44}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    return "dark-alt";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"preHeader") : depth0)) != null ? lookupProperty(stack1,"globalLink") : stack1)) != null ? lookupProperty(stack1,"url") : stack1), depth0));
},"11":function(container,depth0,helpers,partials,data) {
    return "https://qld.gov.au";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"logo"),depth0,{"name":"logo","hash":{"fill":"currentColor","className":"qld-header-logo is-delivering-for-qld","logo":"coa-delivering-for-qld"},"data":data,"indent":"                    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"logo"),depth0,{"name":"logo","hash":{"fill":"currentColor","className":"qld-header-logo"},"data":data,"indent":"                    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"d-none d-lg-flex align-items-baseline\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"preHeader") : depth0)) != null ? lookupProperty(stack1,"actions") : stack1),{"name":"each","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":20},"end":{"line":69,"column":29}}})) != null ? stack1 : "")
    + "                </div>\n";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"dropdown") : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.program(29, data, 0),"data":data,"loc":{"start":{"line":21,"column":20},"end":{"line":68,"column":27}}})) != null ? stack1 : "");
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <div class=\"dropdown\">\n                        <a id=\"dropdown"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":23,"column":39},"end":{"line":23,"column":45}}}) : helper)))
    + "\" role=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\"\n                            class=\"qld-header-link dropdown-toggle\" href=\"#\">\n                            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":25,"column":28},"end":{"line":25,"column":38}}}) : helper))) != null ? stack1 : "")
    + "\n                        </a>\n\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"dropdown") : depth0)) != null ? lookupProperty(stack1,"type") : stack1),"===","list",{"name":"ifCond","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":24},"end":{"line":51,"column":35}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"dropdown") : depth0)) != null ? lookupProperty(stack1,"type") : stack1),"in","html, form",{"name":"ifCond","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":53,"column":24},"end":{"line":57,"column":35}}})) != null ? stack1 : "")
    + "\n                    </div>\n";
},"20":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <ul class=\"dropdown-menu dropdown-menu-end\">\n\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"dropdown") : depth0)) != null ? lookupProperty(stack1,"items") : stack1),{"name":"each","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":28},"end":{"line":38,"column":37}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"dropdown") : depth0)) != null ? lookupProperty(stack1,"viewMore") : stack1),{"name":"if","hash":{},"fn":container.program(24, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":40,"column":28},"end":{"line":48,"column":35}}})) != null ? stack1 : "")
    + "\n                        </ul>\n";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <li>\n                                <a class=\"qld-header-link dropdown-item \" href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":33,"column":80},"end":{"line":33,"column":87}}}) : helper)))
    + "\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"target") : depth0),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":89},"end":{"line":34,"column":71}}})) != null ? stack1 : "")
    + ">\n                                    "
    + alias4(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":35,"column":36},"end":{"line":35,"column":44}}}) : helper)))
    + "\n                                </a>\n                            </li>\n";
},"22":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "target=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"target") || (depth0 != null ? lookupProperty(depth0,"target") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"target","hash":{},"data":data,"loc":{"start":{"line":34,"column":52},"end":{"line":34,"column":62}}}) : helper)))
    + "\" ";
},"24":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <li>\n                                <a href=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"dropdown") : depth0)) != null ? lookupProperty(stack1,"viewMore") : stack1)) != null ? lookupProperty(stack1,"url") : stack1), depth0))
    + "\" "
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"dropdown") : depth0)) != null ? lookupProperty(stack1,"viewMore") : stack1)) != null ? lookupProperty(stack1,"target") : stack1),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":42,"column":68},"end":{"line":43,"column":107}}})) != null ? stack1 : "")
    + "\n                                    class=\"qld-header-link dropdown-item border-bottom-0\">\n                                    "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"dropdown") : depth0)) != null ? lookupProperty(stack1,"viewMore") : stack1)) != null ? lookupProperty(stack1,"text") : stack1), depth0))
    + "\n                                </a>\n                            </li>\n";
},"25":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "target=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"dropdown") : depth0)) != null ? lookupProperty(stack1,"viewMore") : stack1)) != null ? lookupProperty(stack1,"target") : stack1), depth0))
    + "\" ";
},"27":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <div class=\"dropdown-menu dropdown-menu-end\">\n                            "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"dropdown") : depth0)) != null ? lookupProperty(stack1,"HTMLContent") : stack1), depth0)) != null ? stack1 : "")
    + "\n                        </div>\n";
},"29":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n                    <a class=\"qld-header-link ms-16\" href=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":62,"column":59},"end":{"line":62,"column":66}}}) : helper)))
    + "\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"icon") : depth0),{"name":"if","hash":{},"fn":container.program(30, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":63,"column":24},"end":{"line":66,"column":31}}})) != null ? stack1 : "")
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":66,"column":31},"end":{"line":66,"column":41}}}) : helper))) != null ? stack1 : "")
    + "\n                    </a>\n";
},"30":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <span class=\"qld-icon qld-icon-"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"icon") || (depth0 != null ? lookupProperty(depth0,"icon") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"icon","hash":{},"data":data,"loc":{"start":{"line":64,"column":55},"end":{"line":64,"column":63}}}) : helper)))
    + " qld-icon-sm qld-header-link-icon\"\n                            aria-hidden=\"true\"></span>\n                        ";
},"32":function(container,depth0,helpers,partials,data) {
    return "                    <button id=\"qld-header-toggle-search-button\" aria-controls=\"qld-header-search\"\n                        class=\"qld-header-mobile-button is-search-toggle\" aria-expanded=\"false\"\n                        aria-label=\"Open search\">Search</button>\n";
},"34":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"mainContent") : depth0)) != null ? lookupProperty(stack1,"palette") : stack1),"===","default",{"name":"ifCond","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(35, data, 0),"data":data,"loc":{"start":{"line":89,"column":80},"end":{"line":91,"column":33}}})) != null ? stack1 : "");
},"35":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"mainContent") : depth0)) != null ? lookupProperty(stack1,"palette") : stack1),"===","dark-alt",{"name":"ifCond","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":90,"column":53},"end":{"line":91,"column":33}}})) != null ? stack1 : "");
},"37":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"headerBrand"),depth0,{"name":"headerBrand","hash":{"subline":((stack1 = (depth0 != null ? lookupProperty(depth0,"mainContent") : depth0)) != null ? lookupProperty(stack1,"subline") : stack1),"siteTitle":((stack1 = (depth0 != null ? lookupProperty(depth0,"mainContent") : depth0)) != null ? lookupProperty(stack1,"siteTitle") : stack1),"logo":((stack1 = (depth0 != null ? lookupProperty(depth0,"mainContent") : depth0)) != null ? lookupProperty(stack1,"logo") : stack1),"url":((stack1 = (depth0 != null ? lookupProperty(depth0,"mainContent") : depth0)) != null ? lookupProperty(stack1,"url") : stack1),"hasDeliveringForQLDLogo":(depth0 != null ? lookupProperty(depth0,"hasDeliveringForQLDLogo") : depth0)},"data":data,"indent":"                    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"39":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"headerBrand"),depth0,{"name":"headerBrand","hash":{"subline":((stack1 = (depth0 != null ? lookupProperty(depth0,"mainContent") : depth0)) != null ? lookupProperty(stack1,"subline") : stack1),"secondaryLogo":((stack1 = (depth0 != null ? lookupProperty(depth0,"mainContent") : depth0)) != null ? lookupProperty(stack1,"secondaryLogo") : stack1),"siteTitle":((stack1 = (depth0 != null ? lookupProperty(depth0,"mainContent") : depth0)) != null ? lookupProperty(stack1,"siteTitle") : stack1),"logo":((stack1 = (depth0 != null ? lookupProperty(depth0,"mainContent") : depth0)) != null ? lookupProperty(stack1,"logo") : stack1),"url":((stack1 = (depth0 != null ? lookupProperty(depth0,"mainContent") : depth0)) != null ? lookupProperty(stack1,"url") : stack1),"hasDeliveringForQLDLogo":(depth0 != null ? lookupProperty(depth0,"hasDeliveringForQLDLogo") : depth0)},"data":data,"indent":"                    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"41":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"col-lg-4\">\n                    <div id=\"qld-header-search\" class=\"qld-header-site-search is-closed\">\n                        <form class=\"site-search\" role=\"search\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"assets") : depth0)) != null ? lookupProperty(stack1,"siteSearch") : stack1)) != null ? lookupProperty(stack1,"formAction") : stack1)) != null ? lookupProperty(stack1,"url") : stack1),{"name":"if","hash":{},"fn":container.program(42, data, 0),"inverse":container.program(44, data, 0),"data":data,"loc":{"start":{"line":118,"column":64},"end":{"line":120,"column":74}}})) != null ? stack1 : "")
    + ">\n                            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"searchInput") || (depth0 != null ? lookupProperty(depth0,"searchInput") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"searchInput","hash":{},"data":data,"loc":{"start":{"line":121,"column":28},"end":{"line":121,"column":47}}}) : helper))) != null ? stack1 : "")
    + "\n                        </form>\n                    </div>\n                </div>\n";
},"42":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n                            action=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"assets") : depth0)) != null ? lookupProperty(stack1,"siteSearch") : stack1)) != null ? lookupProperty(stack1,"formAction") : stack1)) != null ? lookupProperty(stack1,"url") : stack1), depth0))
    + "\" ";
},"44":function(container,depth0,helpers,partials,data) {
    return "\n                            action=\"https://www.qld.gov.au/search\" ";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<header class=\"qld-header \" role=\"banner\">\n    <div class=\"qld-header-pre-header "
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"preHeader") : depth0)) != null ? lookupProperty(stack1,"palette") : stack1),"===","dark",{"name":"ifCond","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":2,"column":38},"end":{"line":4,"column":66}}})) != null ? stack1 : "")
    + "\">\n        <div class=\"container\">\n            <div class=\"d-flex justify-content-between\">\n\n                <a class=\"qld-header-link align-self-center\"\n                    href=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"preHeader") : depth0)) != null ? lookupProperty(stack1,"globalLink") : stack1)) != null ? lookupProperty(stack1,"url") : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data,"loc":{"start":{"line":9,"column":26},"end":{"line":9,"column":119}}})) != null ? stack1 : "")
    + "\">\n                    <span class=\"d-none d-lg-inline\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"preHeader") : depth0)) != null ? lookupProperty(stack1,"globalLink") : stack1)) != null ? lookupProperty(stack1,"text") : stack1), depth0))
    + "</span>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"hasDeliveringForQLDLogo") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.program(15, data, 0),"data":data,"loc":{"start":{"line":11,"column":20},"end":{"line":15,"column":27}}})) != null ? stack1 : "")
    + "                </a>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"preHeader") : depth0)) != null ? lookupProperty(stack1,"actions") : stack1),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":16},"end":{"line":71,"column":23}}})) != null ? stack1 : "")
    + "\n                <div class=\"qld-header-mobile-controls\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"assets") : depth0)) != null ? lookupProperty(stack1,"siteSearch") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(32, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":74,"column":20},"end":{"line":78,"column":27}}})) != null ? stack1 : "")
    + "\n                    <button id=\"burgerBtn\" class=\"qld-header-mobile-button is-menu-toggle\" data-bs-toggle=\"collapse\"\n                        data-bs-target=\"#main-nav\" aria-controls=\"main-nav\" aria-expanded=\"false\"\n                        aria-label=\"Open menu\">Menu</button>\n                </div>\n            </div>\n\n        </div>\n    </div>\n\n    <div class=\"qld-header-main "
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"mainContent") : depth0)) != null ? lookupProperty(stack1,"palette") : stack1),"===","dark",{"name":"ifCond","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(34, data, 0),"data":data,"loc":{"start":{"line":89,"column":32},"end":{"line":91,"column":44}}})) != null ? stack1 : "")
    + "\">\n        <div class=\"container\">\n            <div class=\"row align-items-center\">\n                <div class=\"col\">\n"
    + ((stack1 = (lookupProperty(helpers,"ifAny")||(depth0 && lookupProperty(depth0,"ifAny"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"isMasterBrand") : depth0),(depth0 != null ? lookupProperty(depth0,"isSubBrand") : depth0),(depth0 != null ? lookupProperty(depth0,"isCoBrand") : depth0),{"name":"ifAny","hash":{},"fn":container.program(37, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":95,"column":20},"end":{"line":102,"column":30}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (lookupProperty(helpers,"ifAny")||(depth0 && lookupProperty(depth0,"ifAny"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"isEndorsedBrand") : depth0),(depth0 != null ? lookupProperty(depth0,"isStandaloneBrand") : depth0),{"name":"ifAny","hash":{},"fn":container.program(39, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":104,"column":20},"end":{"line":112,"column":30}}})) != null ? stack1 : "")
    + "                </div>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"assets") : depth0)) != null ? lookupProperty(stack1,"siteSearch") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(41, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":115,"column":16},"end":{"line":125,"column":23}}})) != null ? stack1 : "")
    + "            </div>\n        </div>\n    </div>\n</header>";
},"usePartial":true,"useData":true});
