# Copyright (c) 2025, Ekvira Cabs and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class Drivers(Document):
	def before_save(self):
		self.full_name = f"{self.first_name} {self.last_name}"
	
	def send_alert(self):
		print("Sending Message")