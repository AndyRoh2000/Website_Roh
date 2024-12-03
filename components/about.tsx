"use client";
import type { CardProps } from "@nextui-org/card";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from "@nextui-org/table";
import { Button } from "@nextui-org/button";


export default function PokeRohinfo(props: CardProps) {
    return (
        <Card className="w-full max-w-[460px]"   {...props}>
            <CardHeader > Overview</CardHeader>
            <CardBody className="flex flex-row flex-wrap p-0">

                <Table aria-label="Example static collection table">
                    <TableHeader>
                        <TableColumn>Name</TableColumn>
                        <TableColumn>GyungMin Roh</TableColumn>
                    </TableHeader>
                    <TableBody>
                        <TableRow key="1">
                            <TableCell>Birth</TableCell>
                            <TableCell>29 SEP 2000</TableCell>

                        </TableRow>
                        <TableRow key="2">
                            <TableCell>Tel</TableCell>
                            <TableCell>+82 10 5267 2227</TableCell>

                        </TableRow>
                        <TableRow key="3">
                            <TableCell>Mail</TableCell>
                            <TableCell>dragonrohgm@gmail.com</TableCell>

                        </TableRow>
                        <TableRow key="4">
                            <TableCell>Career</TableCell>
                            <TableCell>Sungkyunkwan University</TableCell>
                        </TableRow>
                        <TableRow key="5">
                            <TableCell> </TableCell>
                            <TableCell>University of Leicester Exchange</TableCell>
                        </TableRow>
                        <TableRow key="6">
                            <TableCell> </TableCell>
                            <TableCell>UoL Strike Research</TableCell>
                        </TableRow>
                        <TableRow key="7">
                            <TableCell> </TableCell>
                            <TableCell>University of California, Santa Cruz Exchange</TableCell>
                        </TableRow>
                        <TableRow key="8">
                            <TableCell> </TableCell>
                            <TableCell>Formula Slug Collision AI Development</TableCell>
                        </TableRow>
                        <TableRow key="9">
                            <TableCell> </TableCell>
                            <TableCell>GDSC, UCSC</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <div className="px-4 py-5">
                    <div className="flex flex-col gap-3 pt-2 text-small text-default-400">
                        <p>
                        If you'd like more information, please check out the portfolio page.
                        </p>
                        <p>
                        </p>
                        <Button>
                            Go to Portfolio
                        </Button>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}