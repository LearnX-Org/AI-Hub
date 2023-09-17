'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

function Answers() {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

// {
//   "0": {}
// }

export default function CougarChegg() {
  const [selectedFile, setSelectedFile] = useState<File[] | null>([]);
  // Handler for the file change event
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    // console.log(files)
    if (files) {
      // setSelectedFile();
      const filesArray = Array.from(files); // Convert FileList to Array
      setSelectedFile(filesArray);
      // console.log(filesArray);
    }
  };

  const handleSubmit = () => {
    const reader = new FileReader();
    if (selectedFile) {
      selectedFile.forEach((file) => {
        // Read the file as a base64 encoded string
        reader.readAsDataURL(file);

        reader.onload = () => {
          console.log(reader.result); // this will log the base64 encoded string of the file
        };

        reader.onerror = (error) => {
          console.error('Error reading the file:', error);
        };
      });
    }
  };

  console.log(selectedFile);
  return (
    <div className="mx-8 mt-5">
      <Input type="email" placeholder="Find an Expert Answer" />
      <input
        type="file"
        id="input"
        onChange={(e) => handleFileChange(e)}
        multiple
      />
      <button onClick={handleSubmit}>Submit</button>
      <Answers />
    </div>
  );
}
