"use client"

import {useState} from "react"

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {PayrollSummaryCards} from "./payroll-summary-cards"
import {PayrollEmployeeTable} from "./payroll-employee-table"
import {PayrollHeader} from "@/components/custom/content/payroll/payroll-header";

export const employees = [
    {
        id: "EMP001",
        name: "Nguyễn Văn An",
        position: "Kỹ sư phần mềm",
        department: "Kỹ thuật",
        salary: 85000,
        payPeriod: "Hàng tháng",
        lastPayDate: new Date(2025, 2, 28),
        status: "Đã thanh toán",
    },
    {
        id: "EMP002",
        name: "Trần Thị Mai",
        position: "Quản lý sản phẩm",
        department: "Sản phẩm",
        salary: 95000,
        payPeriod: "Hàng tháng",
        lastPayDate: new Date(2025, 2, 28),
        status: "Đã thanh toán",
    },
    {
        id: "EMP003",
        name: "Lê Minh Hoàng",
        position: "Nhà thiết kế UX",
        department: "Thiết kế",
        salary: 78000,
        payPeriod: "Hàng tháng",
        lastPayDate: new Date(2025, 2, 28),
        status: "Đã thanh toán",
    },
    {
        id: "EMP004",
        name: "Phạm Hồng Nhung",
        position: "Chuyên viên marketing",
        department: "Marketing",
        salary: 72000,
        payPeriod: "Hàng tháng",
        lastPayDate: new Date(2025, 2, 28),
        status: "Chưa thanh toán",
    },
    {
        id: "EMP005",
        name: "Đỗ Quang Huy",
        position: "Nhà phân tích dữ liệu",
        department: "Phân tích",
        salary: 80000,
        payPeriod: "Hàng tháng",
        lastPayDate: new Date(2025, 2, 15),
        status: "Đã thanh toán",
    },
    {
        id: "EMP006",
        name: "Bùi Thị Lan",
        position: "Chuyên viên nhân sự",
        department: "Nhân sự",
        salary: 75000,
        payPeriod: "Hàng tháng",
        lastPayDate: new Date(2025, 2, 28),
        status: "Đã thanh toán",
    },
    {
        id: "EMP007",
        name: "Vũ Tiến Đạt",
        position: "Đại diện bán hàng",
        department: "Bán hàng",
        salary: 68000,
        payPeriod: "Hai tuần một lần",
        lastPayDate: new Date(2025, 2, 21),
        status: "Chưa thanh toán",
    },
    {
        id: "EMP008",
        name: "Hoàng Thùy Dung",
        position: "Người viết nội dung",
        department: "Marketing",
        salary: 65000,
        payPeriod: "Hàng tháng",
        lastPayDate: new Date(2025, 2, 28),
        status: "Đã thanh toán",
    },
];


export const payrollSummary = {
    totalEmployees: employees.length,
    totalPayroll: employees.reduce((sum, emp) => sum + emp.salary / 12, 0),
    paidEmployees: employees.filter((emp) => emp.status === "Paid").length,
    pendingPayments: employees.filter((emp) => emp.status === "Pending").length,
}

export default function PayrollDashboard() {
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

    return (
        <div className={"md:mt-16 mx-2 md:mx-5"}>
            <PayrollHeader selectedDate={selectedDate} onDateChange={setSelectedDate}/>

            <Tabs defaultValue="overview" className="w-full">
                <TabsList>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="employees">Employees</TabsTrigger>
                    <TabsTrigger value="history">Payment History</TabsTrigger>
                    <TabsTrigger value="reports">Reports</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-4">
                    <PayrollSummaryCards summary={payrollSummary}/>
                </TabsContent>

                <TabsContent value="employees" className="space-y-4">
                    <PayrollEmployeeTable employees={employees}/>
                </TabsContent>

                <TabsContent value="history" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Payment History</CardTitle>
                            <CardDescription>View past payroll runs and payment details.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">Select a date range to view payment
                                history.</p>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="reports" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Payroll Reports</CardTitle>
                            <CardDescription>Generate and download payroll reports.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">Select report type and date range to
                                generate reports.</p>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}

