#! /bin/sh

error_exit ()
{
	echo "$1" 1>&2
	exit 1
}

echo -n "Enter commit message":
read commit_message
cd /home/nootan/node_apps/first_timer/dev || error_exit "[x] Error Changing Directory. Exiting..."
git add -A
git commit -m "$commit_message"
git push -u origin --all
git push -u production master
