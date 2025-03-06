import { Download, Filter, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface EmployeeTableFiltersProps {
    searchTerm: string
    onSearchChange: (value: string) => void
    selectedDepartment: string
    onDepartmentChange: (value: string) => void
    departments: string[]
}

export function EmployeeTableFilters({
                                         searchTerm,
                                         onSearchChange,
                                         selectedDepartment,
                                         onDepartmentChange,
                                         departments,
                                     }: EmployeeTableFiltersProps) {
    return (
        <div className="flex flex-col md:flex-row gap-4 mb-6 items-start md:items-center justify-between">
            <div className="flex flex-1 items-center gap-2">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search employees..."
                        className="pl-8"
                        value={searchTerm}
                        onChange={(e) => onSearchChange(e.target.value)}
                    />
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="flex items-center gap-2">
                            <Filter className="h-4 w-4" />
                            Filter
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Filter by Department</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {departments.map((dept) => (
                            <DropdownMenuItem
                                key={dept}
                                onClick={() => onDepartmentChange(dept)}
                                className={selectedDepartment === dept ? "bg-muted" : ""}
                            >
                                {dept}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="flex items-center gap-2">
                <Select defaultValue="monthly">
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Pay period" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="biweekly">Bi-weekly</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                    </SelectContent>
                </Select>
                <Button variant="outline" className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Export
                </Button>
            </div>
        </div>
    )
}

