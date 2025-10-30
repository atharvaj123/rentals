# Copyright (c) 2025, Ekvira Cabs and Contributors
# See license.txt

import frappe
from frappe.tests.utils import FrappeTestCase


class TestDrivers(FrappeTestCase):
	def test_full_name_correctly_set(self):
		driver = frappe.new_doc("Drivers")
		driver.first_name = "Atharva"
		driver.last_name = "Joshi"
		driver.license_number = "DL67890"
		driver.save()

		self.assertEqual(driver.full_name, "Atharva Joshi")

	def test_full_name_correctly_set_when_last_name_not_set(self):
		driver = frappe.new_doc("Drivers")
		driver.first_name = "Atharva"
		driver.license_number = "DL67890"
		driver.save()

		self.assertEqual(driver.full_name, "Atharva")
