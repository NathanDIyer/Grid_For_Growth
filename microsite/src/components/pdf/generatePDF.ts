import jsPDF from 'jspdf';

export function generatePDF() {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'letter'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 20;
  const contentWidth = pageWidth - margin * 2;
  let y = margin;

  // Colors
  const electricBlue = '#2563EB';
  const slateGray = '#475569';
  const darkSlate = '#0F172A';

  // Title
  doc.setFontSize(24);
  doc.setTextColor(darkSlate);
  doc.setFont('helvetica', 'bold');
  doc.text('Grid for Growth', margin, y);
  y += 8;

  doc.setFontSize(14);
  doc.setTextColor(slateGray);
  doc.setFont('helvetica', 'normal');
  doc.text('The Economic Case for Federal Grid Investment', margin, y);
  y += 15;

  // Divider line
  doc.setDrawColor(electricBlue);
  doc.setLineWidth(0.5);
  doc.line(margin, y, pageWidth - margin, y);
  y += 12;

  // THE PROBLEM
  doc.setFontSize(12);
  doc.setTextColor(electricBlue);
  doc.setFont('helvetica', 'bold');
  doc.text('THE PROBLEM', margin, y);
  y += 6;

  doc.setFontSize(10);
  doc.setTextColor(darkSlate);
  doc.setFont('helvetica', 'normal');
  const problemText = 'Private utilities plan on 5-10 year horizons at 8% cost of capital. This leads to systematic underbuilding—conservative planning costs 4-5x more in aggregate through cascading expansion costs.';
  const problemLines = doc.splitTextToSize(problemText, contentWidth);
  doc.text(problemLines, margin, y);
  y += problemLines.length * 5 + 8;

  // Key stat box
  doc.setFillColor(255, 241, 241);
  doc.rect(margin, y, contentWidth, 12, 'F');
  doc.setTextColor(239, 68, 68);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('4-5x: Conservative planning costs more in aggregate', margin + 4, y + 8);
  y += 18;

  // THE MATH
  doc.setFontSize(12);
  doc.setTextColor(electricBlue);
  doc.setFont('helvetica', 'bold');
  doc.text('THE MATH', margin, y);
  y += 6;

  doc.setFontSize(10);
  doc.setTextColor(darkSlate);
  doc.setFont('helvetica', 'normal');
  const mathText = 'Infrastructure scaling laws: doubling capacity costs ~68% more, not 100% (costs scale as capacity^0.75). At federal 2% rates, building big now beats waiting and expanding later. The crossover point is ~6% cost of capital.';
  const mathLines = doc.splitTextToSize(mathText, contentWidth);
  doc.text(mathLines, margin, y);
  y += mathLines.length * 5 + 8;

  // Key stat box
  doc.setFillColor(236, 253, 245);
  doc.rect(margin, y, contentWidth, 12, 'F');
  doc.setTextColor(16, 185, 129);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('$590M: Savings at federal 2% rates vs. wait-and-expand', margin + 4, y + 8);
  y += 18;

  // THE SOLUTION
  doc.setFontSize(12);
  doc.setTextColor(electricBlue);
  doc.setFont('helvetica', 'bold');
  doc.text('THE SOLUTION', margin, y);
  y += 6;

  doc.setFontSize(10);
  doc.setTextColor(darkSlate);
  doc.setFont('helvetica', 'normal');
  const solutionText = 'Federal investment has three leverage points with 3-5x returns:';
  doc.text(solutionText, margin, y);
  y += 7;

  const levers = [
    '1. Low-Cost Capital: 2% federal lending changes optimal investment timing',
    '2. Preparation Delta: 25% upfront premium enables 8x capacity at 92% lower $/MW',
    '3. Right-Sizing Grants: 20% grants shift planning from minimum to optimal capacity'
  ];

  levers.forEach(lever => {
    const leverLines = doc.splitTextToSize(lever, contentWidth - 5);
    doc.text(leverLines, margin + 5, y);
    y += leverLines.length * 5 + 2;
  });
  y += 6;

  // Key stat box
  doc.setFillColor(255, 251, 235);
  doc.rect(margin, y, contentWidth, 12, 'F');
  doc.setTextColor(245, 158, 11);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('3-5x: Return per dollar of federal investment', margin + 4, y + 8);
  y += 18;

  // THE PRECEDENT
  doc.setFontSize(12);
  doc.setTextColor(electricBlue);
  doc.setFont('helvetica', 'bold');
  doc.text('THE PRECEDENT: REA', margin, y);
  y += 6;

  doc.setFontSize(10);
  doc.setTextColor(darkSlate);
  doc.setFont('helvetica', 'normal');
  const reaText = 'The Rural Electrification Administration (1935-1955) achieved near-universal rural electrification with 2% loans over 35-year terms. Repayment rate: >99%.';
  const reaLines = doc.splitTextToSize(reaText, contentWidth);
  doc.text(reaLines, margin, y);
  y += reaLines.length * 5 + 10;

  // Divider
  doc.setDrawColor(200, 200, 200);
  doc.line(margin, y, pageWidth - margin, y);
  y += 10;

  // THE ASK
  doc.setFontSize(12);
  doc.setTextColor(electricBlue);
  doc.setFont('helvetica', 'bold');
  doc.text('POLICY RECOMMENDATIONS', margin, y);
  y += 8;

  doc.setFontSize(10);
  doc.setTextColor(darkSlate);
  doc.setFont('helvetica', 'normal');

  const policies = [
    'Federal Grid Investment Authority - 2% lending over 50-year terms',
    'Preparation Delta Grants - Fund oversized rights-of-way and foundations',
    'Right-Sizing Infrastructure Fund - 20% grants for optimal-capacity builds',
    '50-Year Planning Mandate - Optimize for long-term, not short-term rate impact'
  ];

  policies.forEach(policy => {
    doc.text('• ' + policy, margin, y);
    y += 6;
  });

  y += 8;

  // Footer
  doc.setFontSize(9);
  doc.setTextColor(slateGray);
  doc.text('Full analysis: github.com/nathaniyer/Grid_For_Growth', margin, y);
  y += 5;
  doc.text('Generated from gridsfor.growth', margin, y);

  // Save the PDF
  doc.save('grids-for-growth-summary.pdf');
}
