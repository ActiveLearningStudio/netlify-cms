node('currikidev') {
    stage('Cloning Git') {
        checkout scm
    } 
        
    stage('Install dependencies') {
        nodejs('nodejs') {
            sh 'npm install'
            echo "Modules test installed"
        }
        
    }
    stage('Build') {
        nodejs('nodejs') {
            sh 'cp /root/curriki/client/.env.local .env.local'
            sh 'npm run build'
            echo "Build completed"
        }
        
    }

    stage('Package Build') {
        sh "tar -zcvf bundle.tar.gz build/"
    }

    stage('Artifacts Creation') {
        fingerprint 'bundle.tar.gz'
        archiveArtifacts 'bundle.tar.gz'
        echo "Artifacts created"
    }

    stage('Stash changes') {
        stash allowEmpty: true, includes: 'bundle.tar.gz', name: 'buildArtifacts'
    }
    stage('Copying Build') {
        echo 'Unstash'
        unstash 'buildArtifacts'
        echo 'Artifacts copied'

        echo 'Copy'
        sh "yes | sudo cp -R bundle.tar.gz /root/curriki/client && cd /root/curriki/client && sudo tar -xvf bundle.tar.gz && rm -rf html && cp -r build html && docker cp html currikiprod-client:/usr/share/nginx"
        echo 'Copy completed'
    }
}
