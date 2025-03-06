import { CalendarIcon, Plus } from "lucide-react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"

interface PayrollHeaderProps {
    selectedDate: Date | undefined
    onDateChange: (date: Date | undefined) => void
}

export function PayrollHeader({ selectedDate, onDateChange }: PayrollHeaderProps) {
    return (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Payroll Management</h1>
                <p className="text-muted-foreground">Manage employee payroll and payment information</p>
            </div>
            <div className="flex items-center gap-2">
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="outline" className="flex items-center gap-2">
                            <CalendarIcon className="h-4 w-4" />
                            {selectedDate ? format(selectedDate, "MMMM yyyy") : "Select month"}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={selectedDate} onSelect={onDateChange} initialFocus />
                    </PopoverContent>
                </Popover>
                <Button className="flex items-center gap-2">
                    <Plus className="h-4 w-4" />
                    New Payroll Run
                </Button>
            </div>
        </div>
    )
}

