var Handlebars = require("handlebars");  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['footer.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"row\">\n      <div class=\"col title\">\n        <h2 class=\"footer-site-name\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"sitename") || (depth0 != null ? lookupProperty(depth0,"sitename") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"sitename","hash":{},"data":data,"loc":{"start":{"line":7,"column":37},"end":{"line":7,"column":51}}}) : helper)))
    + "</h2>\n      </div>\n    </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "border-column";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"contact") : depth0)) != null ? lookupProperty(stack1,"showList") : stack1),"&&",((stack1 = (depth0 != null ? lookupProperty(depth0,"contact") : depth0)) != null ? lookupProperty(stack1,"list") : stack1),{"name":"ifCond","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":42,"column":14},"end":{"line":60,"column":25}}})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"contact") : depth0)) != null ? lookupProperty(stack1,"list") : stack1),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":43,"column":14},"end":{"line":47,"column":23}}})) != null ? stack1 : "")
    + "\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "              <div class=\"footer-contact-item footer-contact-"
    + alias1(((helper = (helper = lookupProperty(helpers,"key") || (data && lookupProperty(data,"key"))) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"key","hash":{},"data":data,"loc":{"start":{"line":44,"column":61},"end":{"line":44,"column":69}}}) : helper)))
    + "\">\n                <span class=\"qld-icon "
    + alias1(alias2((depth0 != null ? lookupProperty(depth0,"icon") : depth0), depth0))
    + "\" aria-hidden=\"true\"></span> "
    + ((stack1 = alias2((depth0 != null ? lookupProperty(depth0,"label") : depth0), depth0)) != null ? stack1 : "")
    + "\n              </div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "              <div class=\"footer-contact-item footer-contact-phone\">\n                <span class=\"qld-icon qld-icon-phone\" aria-hidden=\"true\"></span> <b>Phone:</b> <a href=\"tel:137468\"\n                rel=\"noopener\">13 QGOV (13 74 68)</a>\n              </div>\n\n              <div class=\"footer-contact-item footer-contact-email\">\n                <span class=\"qld-icon qld-icon-email\" aria-hidden=\"true\"></span> <b>Email:</b> <a\n                href=\"mailto:email@qld.gov.au\" rel=\"noopener\"><span class=\"user-select-all\">email@qld.gov.au</span></a>\n              </div>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <!-- Optional Column 1 -->\n      <div class=\"col-12 col-lg-2 optional-column-1 "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"optionalColumn1") : depth0)) != null ? lookupProperty(stack1,"hasBorderColumn") : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":70,"column":52},"end":{"line":70,"column":111}}})) != null ? stack1 : "")
    + "\"\n        aria-label=\""
    + container.escapeExpression((lookupProperty(helpers,"isdefined")||(depth0 && lookupProperty(depth0,"isdefined"))||container.hooks.helperMissing).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"optionalColumn1") : depth0)) != null ? lookupProperty(stack1,"title") : stack1),"Footer links",{"name":"isdefined","hash":{},"data":data,"loc":{"start":{"line":71,"column":20},"end":{"line":71,"column":71}}}))
    + "\">\n        \n        <div class=\"footer-column pe-16\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"optionalColumn1") : depth0)) != null ? lookupProperty(stack1,"title") : stack1),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":74,"column":10},"end":{"line":76,"column":17}}})) != null ? stack1 : "")
    + "          \n          <div class=\"footer-content\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"optionalColumn1") : depth0)) != null ? lookupProperty(stack1,"content") : stack1),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":79,"column":12},"end":{"line":81,"column":19}}})) != null ? stack1 : "")
    + "            \n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"optionalColumn1") : depth0)) != null ? lookupProperty(stack1,"showFollowLinks") : stack1),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":83,"column":12},"end":{"line":85,"column":19}}})) != null ? stack1 : "")
    + "            \n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"optionalColumn1") : depth0)) != null ? lookupProperty(stack1,"showCustomLinks") : stack1),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":87,"column":12},"end":{"line":89,"column":19}}})) != null ? stack1 : "")
    + "          </div>\n        </div>\n\n      </div>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <h3 class=\"footer-heading\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"optionalColumn1") : depth0)) != null ? lookupProperty(stack1,"title") : stack1), depth0))
    + "</h3>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "              "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"optionalColumn1") : depth0)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"followLinks"),depth0,{"name":"followLinks","data":data,"indent":"              ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"18":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"customLinks"),depth0,{"name":"customLinks","data":data,"indent":"              ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"20":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"footerLinks") : depth0)) != null ? lookupProperty(stack1,"title") : stack1),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":105,"column":10},"end":{"line":107,"column":17}}})) != null ? stack1 : "")
    + "        \n          <ul class=\"nav footer-link-list flex-column pt-lg-2\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"footerLinks") : depth0)) != null ? lookupProperty(stack1,"list") : stack1),{"name":"each","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":111,"column":12},"end":{"line":114,"column":22}}})) != null ? stack1 : "")
    + "          </ul>\n\n";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <h3 class=\"footer-heading\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"footerLinks") : depth0)) != null ? lookupProperty(stack1,"title") : stack1), depth0))
    + "</h3>\n";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <li><a class=\"nav-link\" href=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"link") : depth0), depth0))
    + "\" "
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"target") : depth0),{"name":"if","hash":{},"fn":container.program(24, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":112,"column":59},"end":{"line":112,"column":111}}})) != null ? stack1 : "")
    + ">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"label") : depth0), depth0))
    + "</a></li>\n";
},"24":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "target=\""
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"target") : depth0), depth0))
    + "\" ";
},"26":function(container,depth0,helpers,partials,data) {
    return "\n          <ul class=\"nav footer-link-list flex-column\">\n            <li><a class=\"nav-link\" href=\"https://www.qld.gov.au/help\">Help</a></li>\n            <li><a class=\"nav-link\" href=\"https://www.qld.gov.au/legal/copyright\">Copyright</a></li>  \n            <li><a class=\"nav-link\" href=\"https://www.qld.gov.au/legal/disclaimer\">Disclaimer</a></li>\n            <li><a class=\"nav-link\" href=\"https://www.qld.gov.au/legal/privacy\">Privacy</a></li>\n            <li><a class=\"nav-link\" href=\"https://www.qld.gov.au/about/rights-accountability/right-to-information\">Right to information</a></li>\n            <li><a class=\"nav-link\" href=\"https://www.qld.gov.au/help/accessibility\">Accessibility</a></li>\n            <li><a class=\"nav-link\" href=\"https://smartjobs.qld.gov.au\" target=\"_blank\">Jobs in Queensland Government</a></li>\n            <li><a class=\"nav-link\" href=\"https://www.qld.gov.au/help/languages\">Other languages</a></li>\n          </ul>\n\n";
},"28":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <!-- Optional Column 2 -->\n      <div class=\"col-12 col-lg-2 optional-column-2 "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"optionalColumn2") : depth0)) != null ? lookupProperty(stack1,"hasBorderColumn") : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":140,"column":52},"end":{"line":140,"column":111}}})) != null ? stack1 : "")
    + "\"\n        aria-label=\""
    + container.escapeExpression((lookupProperty(helpers,"isdefined")||(depth0 && lookupProperty(depth0,"isdefined"))||container.hooks.helperMissing).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"optionalColumn2") : depth0)) != null ? lookupProperty(stack1,"title") : stack1),"Footer links",{"name":"isdefined","hash":{},"data":data,"loc":{"start":{"line":141,"column":20},"end":{"line":141,"column":71}}}))
    + "\">\n\n        <div class=\"footer-column pe-lg-16\">\n          \n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"optionalColumn2") : depth0)) != null ? lookupProperty(stack1,"title") : stack1),{"name":"if","hash":{},"fn":container.program(29, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":145,"column":10},"end":{"line":147,"column":17}}})) != null ? stack1 : "")
    + "\n\n          <div class=\"footer-content\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"optionalColumn2") : depth0)) != null ? lookupProperty(stack1,"content") : stack1),{"name":"if","hash":{},"fn":container.program(31, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":151,"column":10},"end":{"line":153,"column":17}}})) != null ? stack1 : "")
    + "          \n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"optionalColumn2") : depth0)) != null ? lookupProperty(stack1,"showFollowLinks") : stack1),{"name":"if","hash":{},"fn":container.program(33, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":155,"column":10},"end":{"line":157,"column":17}}})) != null ? stack1 : "")
    + "          \n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"optionalColumn2") : depth0)) != null ? lookupProperty(stack1,"showCustomLinks") : stack1),{"name":"if","hash":{},"fn":container.program(35, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":159,"column":10},"end":{"line":161,"column":17}}})) != null ? stack1 : "")
    + "\n          </div>\n        </div>\n      </div>\n\n";
},"29":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <h3 class=\"footer-heading\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"optionalColumn2") : depth0)) != null ? lookupProperty(stack1,"title") : stack1), depth0))
    + "</h3>\n";
},"31":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"optionalColumn2") : depth0)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "\n";
},"33":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"followLinks"),depth0,{"name":"followLinks","data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"35":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"customLinks"),depth0,{"name":"customLinks","data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"37":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"acknowledgements") : depth0),{"name":"each","hash":{},"fn":container.program(38, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":177,"column":14},"end":{"line":188,"column":23}}})) != null ? stack1 : "")
    + "            \n";
},"38":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            \n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(39, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":179,"column":14},"end":{"line":181,"column":21}}})) != null ? stack1 : "")
    + "              \n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"if","hash":{},"fn":container.program(41, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":183,"column":14},"end":{"line":186,"column":21}}})) != null ? stack1 : "")
    + "              \n";
},"39":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "              <h3 class=\"footer-heading\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":180,"column":41},"end":{"line":180,"column":50}}}) : helper)))
    + "</h3>\n";
},"41":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "              "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"content") || (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"content","hash":{},"data":data,"loc":{"start":{"line":185,"column":14},"end":{"line":185,"column":29}}}) : helper))) != null ? stack1 : "")
    + "\n";
},"43":function(container,depth0,helpers,partials,data) {
    return "            \n              <p>We pay our respects to the Aboriginal and Torres Strait Islander ancestors of this land, their\n              spirits and their legacy. The foundations laid by these ancestors—our First Nations peoples—give\n              strength, inspiration and courage to current and future generations towards creating a better\n              Queensland.</p>\n\n";
},"45":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <div class=\"footer-logo\">\n            <img src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"footerLogo") : depth0)) != null ? lookupProperty(stack1,"src") : stack1), depth0))
    + "\" alt=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"footerLogo") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1), depth0))
    + "\" class=\"img-fluid\" />\n          </div>\n          \n";
},"47":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          \n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"footerLogo") : depth0)) != null ? lookupProperty(stack1,"show") : stack1),{"name":"if","hash":{},"fn":container.program(48, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":209,"column":12},"end":{"line":213,"column":19}}})) != null ? stack1 : "")
    + "          \n";
},"48":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"footer-crest\">\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"logoCOALandscape"),depth0,{"name":"logoCOALandscape","data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "            </div>\n";
},"50":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <p class=\"copyright\">\n            "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"copyright") : depth0)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"copyright") : depth0)) != null ? lookupProperty(stack1,"showYearFrom") : stack1),{"name":"if","hash":{},"fn":container.program(51, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":221,"column":12},"end":{"line":221,"column":74}}})) != null ? stack1 : "")
    + " "
    + container.escapeExpression((lookupProperty(helpers,"formatDateOrToday")||(depth0 && lookupProperty(depth0,"formatDateOrToday"))||container.hooks.helperMissing).call(alias1,"","YYYY",{"name":"formatDateOrToday","hash":{},"data":data,"loc":{"start":{"line":221,"column":75},"end":{"line":221,"column":107}}}))
    + "\n          </p>\n";
},"51":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"copyright") : depth0)) != null ? lookupProperty(stack1,"yearFrom") : stack1), depth0))
    + " - ";
},"53":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <p class=\"copyright\">© The State of Queensland "
    + container.escapeExpression((lookupProperty(helpers,"formatDateOrToday")||(depth0 && lookupProperty(depth0,"formatDateOrToday"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"","YYYY",{"name":"formatDateOrToday","hash":{},"data":data,"loc":{"start":{"line":225,"column":57},"end":{"line":225,"column":89}}}))
    + "</p>\n";
},"55":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <p>\n            <a class=\"fw-semibold\" href=\""
    + alias3((lookupProperty(helpers,"isdefined")||(depth0 && lookupProperty(depth0,"isdefined"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"organisationLink") : depth0)) != null ? lookupProperty(stack1,"URL") : stack1),"https://www.qld.gov.au",{"name":"isdefined","hash":{},"data":data,"loc":{"start":{"line":231,"column":41},"end":{"line":231,"column":101}}}))
    + "\" rel=\"external\">\n            "
    + alias3((lookupProperty(helpers,"isdefined")||(depth0 && lookupProperty(depth0,"isdefined"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"organisationLink") : depth0)) != null ? lookupProperty(stack1,"text") : stack1),"Queensland Government",{"name":"isdefined","hash":{},"data":data,"loc":{"start":{"line":232,"column":12},"end":{"line":232,"column":72}}}))
    + "\n            </a>\n          </p>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<footer class=\"qld-footer "
    + alias3(((helper = (helper = lookupProperty(helpers,"variantClass") || (depth0 != null ? lookupProperty(depth0,"variantClass") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"variantClass","hash":{},"data":data,"loc":{"start":{"line":1,"column":26},"end":{"line":1,"column":44}}}) : helper)))
    + "\" role=\"contentinfo\">\n  <!-- Footer content container -->\n  <div class=\"container\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"sitename") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":4},"end":{"line":10,"column":11}}})) != null ? stack1 : "")
    + "    <div class=\"row\">\n      \n      <!-- Contact us Column -->\n      <div class=\"col-12 col-lg-3 py-24 py-lg-0 footer-contact "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"contact") : depth0)) != null ? lookupProperty(stack1,"hasBorderColumn") : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":63},"end":{"line":14,"column":114}}})) != null ? stack1 : "")
    + "\">\n\n        <!-- Inner Grid to manage layout of contact us content -->\n        <div class=\"row \">\n\n          <div class=\"col col-lg-12\">\n\n            <h3 class=\"footer-heading\">\n            "
    + alias3((lookupProperty(helpers,"isdefined")||(depth0 && lookupProperty(depth0,"isdefined"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"contact") : depth0)) != null ? lookupProperty(stack1,"title") : stack1),"Contact us",{"name":"isdefined","hash":{},"data":data,"loc":{"start":{"line":22,"column":12},"end":{"line":22,"column":53}}}))
    + "\n            </h3>\n\n            <div>\n            "
    + ((stack1 = (lookupProperty(helpers,"isdefined")||(depth0 && lookupProperty(depth0,"isdefined"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"contact") : depth0)) != null ? lookupProperty(stack1,"content") : stack1),"<p>Get in touch for enquiries, feedback, complaints and compliments.</p>",{"name":"isdefined","hash":{},"data":data,"loc":{"start":{"line":26,"column":12},"end":{"line":26,"column":119}}})) != null ? stack1 : "")
    + "\n            </div>\n              \n          </div><!-- Inner grid col-12  -->\n\n          <div class=\"col col-lg-12 contact-btn order-lg-last d-flex d-lg-block mt-lg-32 \">\n            <a href=\""
    + alias3((lookupProperty(helpers,"isdefined")||(depth0 && lookupProperty(depth0,"isdefined"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"contact") : depth0)) != null ? lookupProperty(stack1,"buttonLink") : stack1),"https://www.qld.gov.au/contact-us",{"name":"isdefined","hash":{},"data":data,"loc":{"start":{"line":33,"column":21},"end":{"line":33,"column":90}}}))
    + "\" class=\"btn btn-outline-secondary\">\n              "
    + alias3((lookupProperty(helpers,"isdefined")||(depth0 && lookupProperty(depth0,"isdefined"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"contact") : depth0)) != null ? lookupProperty(stack1,"buttonLabel") : stack1),"Contact us",{"name":"isdefined","hash":{},"data":data,"loc":{"start":{"line":34,"column":14},"end":{"line":34,"column":61}}}))
    + "\n            </a>\n          </div><!-- Inner grid col-12  -->  \n        \n       \n          <div class=\"col-12\">\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"contact") : depth0)) != null ? lookupProperty(stack1,"showList") : stack1),"!==",false,{"name":"ifCond","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":41,"column":12},"end":{"line":61,"column":23}}})) != null ? stack1 : "")
    + "          </div>\n        </div>\n\n      </div><!-- Contact us Column -->\n\n\n"
    + ((stack1 = (lookupProperty(helpers,"ifAny")||(depth0 && lookupProperty(depth0,"ifAny"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"optionalColumn1") : depth0)) != null ? lookupProperty(stack1,"content") : stack1),((stack1 = (depth0 != null ? lookupProperty(depth0,"optionalColumn1") : depth0)) != null ? lookupProperty(stack1,"showFollowLinks") : stack1),((stack1 = (depth0 != null ? lookupProperty(depth0,"optionalColumn1") : depth0)) != null ? lookupProperty(stack1,"showCustomLinks") : stack1),{"name":"ifAny","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":68,"column":6},"end":{"line":94,"column":16}}})) != null ? stack1 : "")
    + "\n\n      <!-- WoG links -->\n      <div class=\"col-12 col-lg-2 "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"footerLinks") : depth0)) != null ? lookupProperty(stack1,"hasBorderColumn") : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":98,"column":34},"end":{"line":98,"column":89}}})) != null ? stack1 : "")
    + "\"\n        aria-label=\"footer-navigation\">\n        \n        <div class=\"footer-column pe-lg-16\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"footerLinks") : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.program(26, data, 0),"data":data,"loc":{"start":{"line":103,"column":8},"end":{"line":132,"column":15}}})) != null ? stack1 : "")
    + "        \n        </div>\n      </div>\n\n\n"
    + ((stack1 = (lookupProperty(helpers,"ifAny")||(depth0 && lookupProperty(depth0,"ifAny"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"optionalColumn2") : depth0)) != null ? lookupProperty(stack1,"content") : stack1),((stack1 = (depth0 != null ? lookupProperty(depth0,"optionalColumn2") : depth0)) != null ? lookupProperty(stack1,"showFollowLinks") : stack1),((stack1 = (depth0 != null ? lookupProperty(depth0,"optionalColumn2") : depth0)) != null ? lookupProperty(stack1,"showCustomLinks") : stack1),{"name":"ifAny","hash":{},"fn":container.program(28, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":138,"column":6},"end":{"line":167,"column":16}}})) != null ? stack1 : "")
    + "\n      <!-- Acknowledgement of Country -->\n      <div class=\"col crest\">\n\n        <div class=\"footer-column\">\n\n        <div class=\"footer-content\">\n          <div class=\"footer-acknowledgements\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"acknowledgements") : depth0),{"name":"if","hash":{},"fn":container.program(37, data, 0),"inverse":container.program(43, data, 0),"data":data,"loc":{"start":{"line":176,"column":12},"end":{"line":198,"column":19}}})) != null ? stack1 : "")
    + "          </div>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"footerLogo") : depth0)) != null ? lookupProperty(stack1,"src") : stack1),{"name":"if","hash":{},"fn":container.program(45, data, 0),"inverse":container.program(47, data, 0),"data":data,"loc":{"start":{"line":202,"column":10},"end":{"line":215,"column":17}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"copyright") : depth0),{"name":"if","hash":{},"fn":container.program(50, data, 0),"inverse":container.program(53, data, 0),"data":data,"loc":{"start":{"line":218,"column":10},"end":{"line":226,"column":17}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"organisationLink") : depth0)) != null ? lookupProperty(stack1,"show") : stack1),{"name":"if","hash":{},"fn":container.program(55, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":229,"column":10},"end":{"line":235,"column":17}}})) != null ? stack1 : "")
    + "\n        </div>\n\n        </div>\n\n      </div>\n    </div>\n  </div>\n</footer>";
},"usePartial":true,"useData":true});
