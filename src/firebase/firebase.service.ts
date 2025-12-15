import { Injectable, Logger } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class FirebaseService {
  private readonly logger = new Logger(FirebaseService.name);
  public readonly db: admin.firestore.Firestore;

  constructor() {
    // Support FIREBASE_SERVICE_ACCOUNT (file path) or FIREBASE_CREDENTIALS (JSON string)
    const serviceAccountPath = process.env.FIREBASE_SERVICE_ACCOUNT;
    const serviceAccountJson = process.env.FIREBASE_CREDENTIALS;

    let creds: admin.ServiceAccount | undefined;
    if (serviceAccountJson) {
      try {
        creds = JSON.parse(serviceAccountJson);
      } catch (err) {
        this.logger.error('Failed to parse FIREBASE_CREDENTIALS JSON');
        throw err;
      }
    }

    if (serviceAccountPath) {
      admin.initializeApp({ credential: admin.credential.cert(serviceAccountPath as any) });
    } else if (creds) {
      admin.initializeApp({ credential: admin.credential.cert(creds) });
    } else {
      // Initialize with default application credentials if available
      admin.initializeApp();
    }

    this.db = admin.firestore();
  }
}
