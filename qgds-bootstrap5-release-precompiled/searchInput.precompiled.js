var Handlebars = require("handlebars/runtime");  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['searchInput.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " data-"
    + alias1(((helper = (helper = lookupProperty(helpers,"key") || (data && lookupProperty(data,"key"))) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"key","hash":{},"data":data,"loc":{"start":{"line":6,"column":57},"end":{"line":6,"column":65}}}) : helper)))
    + "=\""
    + alias1(container.lambda(depth0, depth0))
    + "\" ";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    \n    <div class=\"suggestions suggestions__group default\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"hasDefaultSuggestions") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":8},"end":{"line":41,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"hasDynamicSuggestions") : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":42,"column":8},"end":{"line":44,"column":15}}})) != null ? stack1 : "")
    + "    </div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"default-suggestions\">\n                <div class=\"suggestions-category\">\n                    <strong class=\"suggestions-category-label d-block\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"defaultSuggestions") : depth0)) != null ? lookupProperty(stack1,"popularServicesTitle") : stack1), depth0))
    + "</strong>\n                    <ul>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"defaultSuggestions") : depth0)) != null ? lookupProperty(stack1,"popularServices") : stack1),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":24},"end":{"line":21,"column":33}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"defaultSuggestions") : depth0)) != null ? lookupProperty(stack1,"popularServicesLink") : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":24},"end":{"line":24,"column":31}}})) != null ? stack1 : "")
    + "                    </ul>\n                </div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"defaultSuggestions") : depth0)) != null ? lookupProperty(stack1,"categories") : stack1),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":16},"end":{"line":39,"column":23}}})) != null ? stack1 : "")
    + "            </div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <li><a tabindex=\"0\" href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"link") || (depth0 != null ? lookupProperty(depth0,"link") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data,"loc":{"start":{"line":20,"column":50},"end":{"line":20,"column":58}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":20,"column":60},"end":{"line":20,"column":69}}}) : helper)))
    + "</a></li>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <li><a tabindex=\"0\" href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"defaultSuggestions") : depth0)) != null ? lookupProperty(stack1,"popularServicesLink") : stack1)) != null ? lookupProperty(stack1,"href") : stack1), depth0))
    + "\" class=\"view-more\">"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"defaultSuggestions") : depth0)) != null ? lookupProperty(stack1,"popularServicesLink") : stack1)) != null ? lookupProperty(stack1,"label") : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":23,"column":121},"end":{"line":23,"column":245}}})) != null ? stack1 : "")
    + "</a></li>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"defaultSuggestions") : depth0)) != null ? lookupProperty(stack1,"popularServicesLink") : stack1)) != null ? lookupProperty(stack1,"label") : stack1), depth0));
},"10":function(container,depth0,helpers,partials,data) {
    return "View More";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"suggestions-category\">\n                    <strong class=\"suggestions-category-label d-block\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"defaultSuggestions") : depth0)) != null ? lookupProperty(stack1,"categoriesTitle") : stack1), depth0))
    + "</strong>\n                    <ul>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"defaultSuggestions") : depth0)) != null ? lookupProperty(stack1,"categories") : stack1),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":24},"end":{"line":33,"column":33}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"defaultSuggestions") : depth0)) != null ? lookupProperty(stack1,"categoriesLink") : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":24},"end":{"line":36,"column":31}}})) != null ? stack1 : "")
    + "                    </ul>\n                </div>\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <li><a tabindex=\"0\" href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"defaultSuggestions") : depth0)) != null ? lookupProperty(stack1,"categoriesLink") : stack1)) != null ? lookupProperty(stack1,"href") : stack1), depth0))
    + "\" class=\"view-more\">"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"defaultSuggestions") : depth0)) != null ? lookupProperty(stack1,"categoriesLink") : stack1)) != null ? lookupProperty(stack1,"label") : stack1),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":35,"column":116},"end":{"line":35,"column":230}}})) != null ? stack1 : "")
    + "</a></li>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"defaultSuggestions") : depth0)) != null ? lookupProperty(stack1,"categoriesLink") : stack1)) != null ? lookupProperty(stack1,"label") : stack1), depth0));
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"dynamic-suggestions\" "
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"dynamicSuggestionsServiceLink") : depth0)) != null ? lookupProperty(stack1,"href") : stack1),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":43,"column":45},"end":{"line":43,"column":149}}})) != null ? stack1 : "")
    + "></div>\n";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "data-view-more=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"dynamicSuggestionsServiceLink") : depth0)) != null ? lookupProperty(stack1,"href") : stack1), depth0))
    + "\"";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!-- \n    QGDS Component: Search input \n-->\n<div class=\"qld-search-input "
    + alias4(((helper = (helper = lookupProperty(helpers,"customClass") || (depth0 != null ? lookupProperty(depth0,"customClass") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"customClass","hash":{},"data":data,"loc":{"start":{"line":4,"column":29},"end":{"line":4,"column":44}}}) : helper)))
    + "\">\n    <input id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"inputID") || (depth0 != null ? lookupProperty(depth0,"inputID") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"inputID","hash":{},"data":data,"loc":{"start":{"line":5,"column":15},"end":{"line":5,"column":28}}}) : helper)))
    + "\" name=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"inputName") || (depth0 != null ? lookupProperty(depth0,"inputName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"inputName","hash":{},"data":data,"loc":{"start":{"line":5,"column":36},"end":{"line":5,"column":51}}}) : helper)))
    + "\" class=\"form-control\" type=\"text\" autocomplete=\"off\"\n        aria-label=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"ariaLabel") || (depth0 != null ? lookupProperty(depth0,"ariaLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ariaLabel","hash":{},"data":data,"loc":{"start":{"line":6,"column":20},"end":{"line":6,"column":35}}}) : helper)))
    + "\" "
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"tags") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":37},"end":{"line":6,"column":86}}})) != null ? stack1 : "")
    + " placeholder=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"placeholder") || (depth0 != null ? lookupProperty(depth0,"placeholder") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"placeholder","hash":{},"data":data,"loc":{"start":{"line":6,"column":100},"end":{"line":6,"column":115}}}) : helper)))
    + "\" />\n    <button class=\"btn btn-primary\" type=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"buttonType") || (depth0 != null ? lookupProperty(depth0,"buttonType") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"buttonType","hash":{},"data":data,"loc":{"start":{"line":7,"column":42},"end":{"line":7,"column":58}}}) : helper)))
    + "\" id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"buttonID") || (depth0 != null ? lookupProperty(depth0,"buttonID") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"buttonID","hash":{},"data":data,"loc":{"start":{"line":7,"column":64},"end":{"line":7,"column":78}}}) : helper)))
    + "\" aria-label=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"buttonLabel") || (depth0 != null ? lookupProperty(depth0,"buttonLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"buttonLabel","hash":{},"data":data,"loc":{"start":{"line":7,"column":92},"end":{"line":7,"column":109}}}) : helper)))
    + "\">\n        <span class=\"btn-icon\" aria-hidden=\"true\"></span>\n        <span class=\"btn-label\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"buttonLabel") || (depth0 != null ? lookupProperty(depth0,"buttonLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"buttonLabel","hash":{},"data":data,"loc":{"start":{"line":9,"column":32},"end":{"line":9,"column":49}}}) : helper)))
    + "</span>\n    </button>\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"hasDynamicSuggestions") : depth0),"||",(depth0 != null ? lookupProperty(depth0,"hasDefaultSuggestions") : depth0),{"name":"ifCond","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":4},"end":{"line":46,"column":15}}})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
