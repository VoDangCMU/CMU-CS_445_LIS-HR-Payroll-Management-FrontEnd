import { format } from "date-fns"

import { TableCell, TableRow } from "@/components/ui/table"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

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

interface EmployeeTableRowProps {
    employee: Employee
}

export function EmployeeTableRow({ employee }: EmployeeTableRowProps) {
    return (
        <TableRow>
            <TableCell className="font-medium">{employee.id}</TableCell>
            <TableCell>{employee.name}</TableCell>
            <TableCell>{employee.position}</TableCell>
            <TableCell>{employee.department}</TableCell>
            <TableCell className="text-right">${employee.salary.toLocaleString()}</TableCell>
            <TableCell>{employee.payPeriod}</TableCell>
            <TableCell>{format(employee.lastPayDate, "MMM dd, yyyy")}</TableCell>
            <TableCell>
                <Badge variant={employee.status === "Đã thanh toán" ? "secondary" : "destructive"}>{employee.status}</Badge>            </TableCell>
            <TableCell>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-4 w-4"
                            >
                                <circle cx="12" cy="12" r="1" />
                                <circle cx="12" cy="5" r="1" />
                                <circle cx="12" cy="19" r="1" />
                            </svg>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Edit Salary</DropdownMenuItem>
                        <DropdownMenuItem>Process Payment</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Payment History</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </TableCell>
        </TableRow>
    )
}

