import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const APK_DIR = path.join(process.cwd(), 'uploads', 'apk');
const APK_FILENAME = 'apex-housing.apk';

export async function GET() {
  const apkPath = path.join(APK_DIR, APK_FILENAME);

  if (!existsSync(apkPath)) {
    return NextResponse.json(
      { error: 'APK not found. Please upload the APK file to uploads/apk/' },
      { status: 404 }
    );
  }

  const fileBuffer = await readFile(apkPath);

  return new NextResponse(fileBuffer, {
    status: 200,
    headers: {
      'Content-Type': 'application/vnd.android.package-archive',
      'Content-Disposition': `attachment; filename="${APK_FILENAME}"`,
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
