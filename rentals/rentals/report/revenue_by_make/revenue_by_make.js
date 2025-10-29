// Copyright (c) 2025, Ekvira Cabs and contributors
// For license information, please see license.txt

frappe.query_reports["Revenue by Make"] = {
	"filters": [
		{
			"fieldname": "myfilter",
			"label": "Filter",
			"fieldtype": "Link",
			"options": "Vehicles"
		}

	]
};
