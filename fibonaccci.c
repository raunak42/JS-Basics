#include<stdio.h>
int main(){
    int n1=0;
    int n2=1;
    int n3;

    for(int i=0; i<=11; i++){
        printf("%d\n", n1);
        n3=n2+n1;
        n1=n2;
        n2=n3;
    }
}

