"use client"

import { useState } from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { EmployeeTableRow } from "./employee-table-row"
import { EmployeeTableFilters } from "./employee-table-filters"

interface Employee {
    id: string
    name: string
    position: string
    department: string
    salary: number
    payPeriod: string
    lastPayDate: Date
    status: string
}

interface PayrollEmployeeTableProps {
    employees: Employee[]
}

export function PayrollEmployeeTable({ employees }: PayrollEmployeeTableProps) {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedDepartment, setSelectedDepartment] = useState("All")

    // Filter employees based on search term and department
    const filteredEmployees = employees.filter((employee) => {
        const matchesSearch =
            employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            employee.id.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesDepartment = selectedDepartment === "All" || employee.department === selectedDepartment
        return matchesSearch && matchesDepartment
    })

    // Get unique departments for filter dropdown
    const departments = ["All", ...new Set(employees.map((emp) => emp.department))]

    return (
        <Card>
            <CardHeader>
                <CardTitle>Employee Payroll</CardTitle>
                <CardDescription>Manage employee salary information and payment status.</CardDescription>
            </CardHeader>
            <CardContent>
                <EmployeeTableFilters
                    searchTerm={searchTerm}
                    onSearchChange={setSearchTerm}
                    selectedDepartment={selectedDepartment}
                    onDepartmentChange={setSelectedDepartment}
                    departments={departments}
                />

                <div className="rounded-md border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Employee ID</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Position</TableHead>
                                <TableHead>Department</TableHead>
                                <TableHead className="text-right">Salary</TableHead>
                                <TableHead>Pay Period</TableHead>
                                <TableHead>Last Paid</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="w-[80px]">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredEmployees.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={9} className="h-24 text-center">
                                        No employees found.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                filteredEmployees.map((employee) => <EmployeeTableRow key={employee.id} employee={employee} />)
                            )}
                        </TableBody>
                    </Table>
                </div>
            </CardContent>
        </Card>
    )
}

